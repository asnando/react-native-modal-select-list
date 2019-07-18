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
    } = this.props;
    return (
      <SelectListContainer>
        <SelectListHeader
          placeholder={placeholder}
          closeButtonText={closeButtonText}
          onCloseModalRequest={onCloseModalRequest}
        />
        <SelectListContent
          options={options}
          provider={provider}
          pageSize={pageSize}
          inputName={inputName}
          filter={filter}
          onRowSelected={onRowSelected}
        />
      </SelectListContainer>
    );
  }
}

SelectList.defaultProps = {
  placeholder: null,
  closeButtonText: null,
  ...optionsDefaultProps,
};

SelectList.propTypes = {
  placeholder: PropTypes.string,
  closeButtonText: PropTypes.string,
  onCloseModalRequest: PropTypes.func.isRequired,
  onRowSelected: PropTypes.func.isRequired,
  ...optionsPropTypes,
};

export default SelectList;
