import React, { PureComponent } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import optionsDefaultProps from '../constants/optionsDefaultProps';
import optionPropTypes from '../constants/optionsPropTypes';
import {
  SelectListContentContainer,
} from './SelectListContent.styles';
import SelectListRow from './SelectListRow';

const initialState = {
  page: 1,
  loading: false,
  options: [],
};

class SelectListContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.resolveOptions();
  }

  resolveOptions() {
    const { options, provider } = this.props;
    if (typeof provider === 'function') {
      return this.setState({ options: initialState.options });
    }
    return this.setState({ options });
  }

  renderRow({ item }) {
    const { onRowSelected } = this.props;
    return <SelectListRow {...item} onRowSelected={onRowSelected} />;
  }

  renderFooter() {
    const { loading } = this.state;
    return loading && (
      <ActivityIndicator size="large" />
    );
  }

  render() {
    const { options } = this.state;
    return (
      <SelectListContentContainer>
        <FlatList
          data={options}
          renderItem={(...args) => this.renderRow(...args)}
          ListFooterComponent={() => this.renderFooter()}
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
