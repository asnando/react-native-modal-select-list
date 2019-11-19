import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  SelectListRowContainer,
  SelectListRowText,
  SelectListRowContainerDisabled,
  SelectListRowButton,
  SelectListRowButtonContainer,
} from './SelectListRow.styles';
import { View, Dimensions } from 'react-native';

class SelectListRow extends PureComponent {
  handleRowSelection() {
    const { onRowSelected, value } = this.props;
    return onRowSelected(value);
  }

  render() {
    const { label, visible } = this.props;
    let stylesContainer = { 
      borderBottomWidth: 1, 
      flexDirection: "row", 
      borderBottomColor: "#eee" 
    }

    if (label.length < 50) 
      stylesContainer.width = Dimensions.get("window").width;

    return (
      <View style={stylesContainer}>
        {visible != "disabled" &&
          <SelectListRowButtonContainer>
            <SelectListRowButton onPress={() => this.handleRowSelection()} title={"Pilih"} />
          </SelectListRowButtonContainer>
        }
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
      </View>
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
