import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import optionsDefaultProps from  '../constants/optionsDefaultProps';
import optionsPropTypes from '../constants/optionsPropTypes';
import {
  SelectListContainer,
} from './SelectList.styles';
import SelectListHeader from './SelectListHeader';
import SelectListContent from './SelectListContent';

class SelectList extends PureComponent {
  handleHeaderInputChangeText(value) {
    this.content.onHeaderInputChangeText(value);
  }

  saveContentComponentRef(ref) {
    this.content = ref;
  }

  modalWillHide() {
    const { content: contentComponent } = this;
    return contentComponent.modalWillHide();
  }

  render() {
    const {
      placeholder,
      closeButtonText,
      onCloseModalRequest,
      onRowSelected,
      options,
      provider,
      pageSize,
      inputName,
      filter,
      disableTextSearch,
      headerTintColor,
      buttonTextColor,
    } = this.props;
    return (
      <SelectListContainer>
        <SelectListHeader
          placeholder={placeholder}
          closeButtonText={closeButtonText}
          disableTextSearch={disableTextSearch}
          onCloseModalRequest={onCloseModalRequest}
          onHeaderInputChangeText={(...args) => this.handleHeaderInputChangeText(...args)}
          headerTintColor={headerTintColor}
          buttonTextColor={buttonTextColor}
        />
        <SelectListContent
          options={options}
          provider={provider}
          pageSize={pageSize}
          inputName={inputName}
          filter={filter}
          onRowSelected={onRowSelected}
          ref={(...args) => this.saveContentComponentRef(...args)}
        />
      </SelectListContainer>
    );
  }
}

SelectList.defaultProps = {
  placeholder: null,
  closeButtonText: null,
  disableTextSearch: false,
  headerTintColor: null,
  buttonTextColor: null,
  ...optionsDefaultProps,
};

SelectList.propTypes = {
  placeholder: PropTypes.string,
  closeButtonText: PropTypes.string,
  onCloseModalRequest: PropTypes.func.isRequired,
  onRowSelected: PropTypes.func.isRequired,
  disableTextSearch: PropTypes.bool,
  headerTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  ...optionsPropTypes,
};

export default SelectList;
