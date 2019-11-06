import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import optionsDefaultProps from '../constants/optionsDefaultProps';
import optionPropTypes from '../constants/optionsPropTypes';
import {
  SelectListContentContainer,
  SelectListActivityIndicator,
} from './SelectListContent.styles';
import SelectListRow from './SelectListRow';

const initialState = {
  page: 1,
  loading: true,
  canLoadMoreOptions: true,
  options: [],
  filteredOptions: []
};

const mapVisiblePropertyToOptions = options => options.map((option) => {
  if (typeof option.visible === 'undefined') {
    option.visible = true;
  }
  return option;
});

class SelectListContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.resolveOptions();
  }

  extendedFilterOptionsListByText = (text, options) => {
    const rgxpFilterByText = new RegExp(`^.*?(${text}).*?$`, 'i');
    
    const { messageNotFound } = this.props;
    let message = messageNotFound ? messageNotFound : "Data tidak ditemukan!!";

    let optionFiltered = [];

    options.map((option, key) => {
      if (rgxpFilterByText.test(option.label)) {
        optionFiltered.push(option)
      }
    });

    if (options.length > 0 && optionFiltered == 0 && text.length > 0) {
      optionFiltered.push({ label: message, value: message, visible: "disabled" });
    }

    return optionFiltered
  };

  // Will be called from the parent component when
  // the modal header input change the text value.
  onHeaderInputChangeText(text) {
    const optionsProviderType = this.whichOptionsProviderType();
    if (optionsProviderType === 'static') {
      return this.filterOptionsListByText(text);
    }
    if (optionsProviderType === 'provider') {
      return this.reset(this.getOptionsFromProvider.bind(this, text));
    }
    return null;
  }

  getOptionsFromStaticList() {
    const { options } = this.props;
    return this.setOptionsList(options, this.setLoadingStatus.bind(this, false));
  }

  getOptionsFromProvider(text) {
    const { page } = this.state;

    const {
      provider,
      pageSize,
      inputName,
      filter,
      messageNotFound
    } = this.props;

    let providerOptions = {
      page,
      pageSize,
      [inputName]: text,
    };

    // Extends the object containing additional filter keys
    // to pass down to the provider function.
    if (filter !== null && typeof filter !== 'undefined') {
      if (typeof filter === 'function') {
        providerOptions = {
          ...providerOptions,
          ...filter(),
        };
      }
      providerOptions = {
        ...providerOptions,
        ...filter,
      };
    }

    const value = provider(providerOptions);
    
    let message = messageNotFound ? messageNotFound : "Data tidak ditemukan!!";

    if (value && typeof value.then === 'function') {
      return value.then((options) => {
        //here 
        if (options.length == 0 && text.length > 0) {
          options.push({ label: message, value: message, visible: "disabled" });
        }
        
        return this.addOptionsToList(options, () => {
          return this.setLoadingStatus(false, () => {
            // If provider returned less data than expected,
            // then disable the load of more options.
            if (options.length < pageSize) {
              this.setState({ canLoadMoreOptions: false });
            }
          });
        });
      });
    }
    return this.addOptionsToList(value, this.setLoadingStatus.bind(this, false));
  }

  setLoadingStatus(status, callback) {
    return this.setState({
      loading: status,
    }, callback);
  }

  setOptionsList(options, callback) {
    return this.setState({
      options: mapVisiblePropertyToOptions(options),
    }, callback);
  }

  // We need to reset the static options visibility before every
  // modal hide event. Otherwise, the last selected option
  // from the list will be the only displayed in the list.
  modalWillHide() {
    const optionsProviderType = this.whichOptionsProviderType();
    if (optionsProviderType === 'static') {
      this.resetOptionsListVisibility();
    }
  }

  resetOptionsListVisibility() {
    const { options } = this.props;

    return this.setOptionsList(options);
  }

  addOptionsToList(options, callback) {
    const { options: prevStateOptions } = this.state;
    return this.setState({
      options: mapVisiblePropertyToOptions(prevStateOptions.concat(options)),
    }, callback);
  }

  reset(callback) {
    return this.setState(initialState, callback);
  }

  whichOptionsProviderType() {
    const { provider } = this.props;
    if (typeof provider === 'function') {
      return 'provider';
    }
    return 'static';
  }

  filterOptionsListByText(text) {
    const { options } = this.state;

    if (text.length == 0) {
      return this.setOptionsList(this.props.options);
    }

    return this.setOptionsList(this.extendedFilterOptionsListByText(text, options));
  }

  resolveOptions() {
    const optionsProviderType = this.whichOptionsProviderType();
    switch (optionsProviderType) {
      case 'static':
        return this.getOptionsFromStaticList();
      case 'provider':
        return this.getOptionsFromProvider();
      default:
        break;
    }
    return null;
  }

  handleEndListReached() {
    const optionsProviderType = this.whichOptionsProviderType();
    if (optionsProviderType === 'provider') {
      this.requestNextPage();
    }
  }

  requestNextPage() {
    const { page, loading, canLoadMoreOptions } = this.state;
    // Abort if already loading
    if (loading || !canLoadMoreOptions) return;
    this.setState({
      loading: true,
      page: page + 1,
    }, this.getOptionsFromProvider.bind(this));
  }

  renderRow({ item }) {
    const { onRowSelected } = this.props;
    return item.visible && (<SelectListRow {...item} onRowSelected={onRowSelected} />);
  }

  renderFooter() {
    const { loading } = this.state;
    return loading && (
      <SelectListActivityIndicator size="large" />
    );
  }

  render() {
    const { options } = this.state;
    return (
      <SelectListContentContainer>
        <FlatList
          data={options}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(...args) => this.renderRow(...args)}
          ListFooterComponent={() => this.renderFooter()}
          onEndReached={() => this.handleEndListReached()}
          onEndReachedThreshold={1}
        />
      </SelectListContentContainer>
    );
  }
}

SelectListContent.defaultProps = {
  ...optionsDefaultProps,
};

SelectListContent.propTypes = {
  ...optionPropTypes,
  onRowSelected: PropTypes.func.isRequired,
};

export default SelectListContent;
