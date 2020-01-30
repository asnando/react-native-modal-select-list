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
    const { label, numberOfLines } = this.props;
    return (
      <SelectListRowContainer onPress={() => this.handleRowSelection()}>
        <SelectListRowText numberOfLines={numberOfLines}>
          {label}
        </SelectListRowText>
      </SelectListRowContainer>
    );
  }
}

SelectListRow.defaultProps = {
  label: '',
  value: null,
  numberOfLines: 1,
};

SelectListRow.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  onRowSelected: PropTypes.func.isRequired,
  numberOfLines: PropTypes.number,
};

export default SelectListRow;
