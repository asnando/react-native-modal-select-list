import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  SelectListRowContainer,
  SelectListRowText,
  SelectListRowContainerDisabled,
} from './SelectListRow.styles';

class SelectListRow extends PureComponent {
  handleRowSelection() {
    const { onRowSelected, value } = this.props;
    return onRowSelected(value);
  }

  render() {
    const { label, visible } = this.props;
    return (
      <SelectListRowContainerDisabled>
        {visible === true ?
          <SelectListRowContainer onPress={() => this.handleRowSelection()}>
            <SelectListRowText numberOfLines={1}>
              {label}
            </SelectListRowText>
          </SelectListRowContainer> :
          <SelectListRowText numberOfLines={1}>
            {label}
          </SelectListRowText>
        }
      </SelectListRowContainerDisabled>
    );
  }
}

SelectListRow.defaultProps = {
  label: '',
  value: null,
  visible: false,
};

SelectListRow.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  visible: PropTypes.bool,
  onRowSelected: PropTypes.func.isRequired,
};

export default SelectListRow;
