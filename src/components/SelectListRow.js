import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  SelectListRowContainer,
  SelectListRowText,
} from './SelectListRow.styles';

class SelectListRow extends PureComponent {
  handleRowSelection() {
    const { onRowSelected, value } = this.props;
    return onRowSelected(value);
  }

  render() {
    const { label } = this.props;
    return (
      <SelectListRowContainer onPress={() => this.handleRowSelection()}>
        <SelectListRowText numberOfLines={1}>
          {label}
        </SelectListRowText>
      </SelectListRowContainer>
    );
  }
}

SelectListRow.defaultProps = {
  label: '',
  value: null,
};

SelectListRow.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  onRowSelected: PropTypes.func.isRequired,
};

export default SelectListRow;
