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
    const { label, numberOfLines, isLastRow } = this.props;
    return (
      <SelectListRowContainer onPress={() => this.handleRowSelection()} isLastRow={isLastRow}>
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
  isLastRow: false,
};

SelectListRow.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  onRowSelected: PropTypes.func.isRequired,
  numberOfLines: PropTypes.number,
  isLastRow: PropTypes.bool,
};

export default SelectListRow;
