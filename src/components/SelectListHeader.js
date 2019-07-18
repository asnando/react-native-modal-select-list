import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  SelectListHeaderContainer,
  SelectListHeaderContent,
  SelectListHeaderCloseButton,
  SelectListHeaderCloseButtonText,
  SelectListHeaderInputContainer,
  SelectListHeaderInput,
  SelectListHeaderInputClearButton,
  SelectListHeaderInputClearButtonText,
} from './SelectListHeader.styles';

const initialState = {
  text: '',
};

class SelectListHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChangeText(text) {
    return this.setState({ text });
  }

  clearText() {
    return this.handleChangeText(initialState.text);
  }

  render() {
    const {
      placeholder,
      closeButtonText,
      onCloseModalRequest,
    } = this.props;
    const { text } = this.state;
    return (
      <SelectListHeaderContainer>
        <SelectListHeaderContent>
          <SelectListHeaderCloseButton onPress={onCloseModalRequest}>
            <SelectListHeaderCloseButtonText numberOfLines={1}>
              {closeButtonText}
            </SelectListHeaderCloseButtonText>
          </SelectListHeaderCloseButton>
          <SelectListHeaderInputContainer>
            <SelectListHeaderInput
              placeholder={placeholder}
              value={text}
              onChangeText={(...args) => this.handleChangeText(...args)}
            />
            { !!text && (
              <SelectListHeaderInputClearButton onPress={() => this.clearText()}>
                <SelectListHeaderInputClearButtonText>x</SelectListHeaderInputClearButtonText>
              </SelectListHeaderInputClearButton>
            )}
          </SelectListHeaderInputContainer>
        </SelectListHeaderContent>
      </SelectListHeaderContainer>
    );
  }
}

SelectListHeader.defaultProps = {
  placeholder: null,
  closeButtonText: 'Close',
};

SelectListHeader.propTypes = {
  placeholder: PropTypes.string,
  closeButtonText: PropTypes.string,
  onCloseModalRequest: PropTypes.func.isRequired,
};

export default SelectListHeader;
