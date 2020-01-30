import React, { PureComponent } from 'react';
import { View } from 'react-native';
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

const USER_EDITION_WAIT_INTERVAL = 300;

const initialState = {
  text: '',
  onUserEditionEnd: null,
};

class SelectListHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChangeText(text) {
    const { onUserEditionEnd } = this.state;
    // Updates the inputed text into state.
    this.setState({ text });
    // Clear any user edition timer that is already running.
    clearTimeout(onUserEditionEnd);
    this.setState({
      onUserEditionEnd: setTimeout(
        this.handleUserEndedEdition.bind(this),
        USER_EDITION_WAIT_INTERVAL,
      ),
    });
  }

  handleUserEndedEdition() {
    const { text } = this.state;
    const { onHeaderInputChangeText } = this.props;
    onHeaderInputChangeText(text);
  }

  clearText() {
    return this.handleChangeText(initialState.text);
  }

  handleCloseButtonPress() {
    const { onCloseModalRequest } = this.props;
    onCloseModalRequest();
  }

  render() {
    const {
      placeholder,
      disableTextSearch,
      closeButtonText,
      closeButtonComponent,
      headerTintColor,
      buttonTextColor,
    } = this.props;
    const { text } = this.state;
    return (
      <SelectListHeaderContainer headerTintColor={headerTintColor}>
        <SelectListHeaderContent>
          <SelectListHeaderCloseButton
            onPress={() => this.handleCloseButtonPress()}
          >
            {closeButtonComponent ? (
              <View>{closeButtonComponent}</View>
            ) : (
              <SelectListHeaderCloseButtonText
                numberOfLines={1}
                buttonTextColor={buttonTextColor}
              >
                {closeButtonText}
              </SelectListHeaderCloseButtonText>
            )}
          </SelectListHeaderCloseButton>
          { !disableTextSearch && (
            <SelectListHeaderInputContainer>
              <SelectListHeaderInput
                placeholder={placeholder}
                value={text}
                onChangeText={(...args) => this.handleChangeText(...args)}
                clearButtonMode="while-editing"
              />
            </SelectListHeaderInputContainer>
          )}
        </SelectListHeaderContent>
      </SelectListHeaderContainer>
    );
  }
}

SelectListHeader.defaultProps = {
  placeholder: null,
  closeButtonText: 'Close',
  closeButtonComponent: false,
  headerTintColor: null,
  buttonTextColor: null,
};

SelectListHeader.propTypes = {
  placeholder: PropTypes.string,
  closeButtonText: PropTypes.string,
  onCloseModalRequest: PropTypes.func.isRequired,
  onHeaderInputChangeText: PropTypes.func.isRequired,
  disableTextSearch: PropTypes.bool.isRequired,
  headerTintColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
};

export default SelectListHeader;
