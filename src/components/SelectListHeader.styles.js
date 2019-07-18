import styled from 'styled-components';

const SELECT_LIST_HEADER_CONTAINER_HEIGHT = 112;
const SELECT_LIST_HEADER_INPUT_SIZE = 38;
const SELECT_LIST_HEADER_INPUT_CLEAR_BUTTON_SIZE = 24;
const SELECT_LIST_HEADER_INPUT_FONT_SIZE = 16;
const SELECT_LIST_HEADER_CLOSE_BUTTON_SIZE = 56;
const SELECT_LIST_HEADER_INPUT_BORDER_RADIUS = 8;
const SELECT_LIST_HEADER_CONTAINER_TINT_COLOR = '#EEE';
const SELECT_LIST_HEADER_BORDER_COLOR = '#DDD';
const SELECT_LIST_HEADER_BUTTON_COLOR = '#DDD';
const SELECT_LIST_HEADER_CLEAR_BUTTON_COLOR = '#EEE';
const SELECT_LIST_HEADER_CLEAR_BUTTON_TEXT_COLOR = '#606060';

export const SelectListHeaderContainer = styled.SafeAreaView`
  width: 100%;
  height: ${SELECT_LIST_HEADER_CONTAINER_HEIGHT};
  background-color: ${SELECT_LIST_HEADER_CONTAINER_TINT_COLOR};
  align-items: center;
  border-bottom-width: 1;
  border-color: ${SELECT_LIST_HEADER_BORDER_COLOR};
`;

export const SelectListHeaderContent = styled.View`
  flex: 1;
  width: 90%;
  flex-direction: row;
  flex-direction: row;
  align-items: center;
`;

export const SelectListHeaderCloseButton = styled.TouchableOpacity`
  width: ${SELECT_LIST_HEADER_CLOSE_BUTTON_SIZE};
  height: ${SELECT_LIST_HEADER_CLOSE_BUTTON_SIZE};
  border-radius: 4;
  align-items: center;
  justify-content: center;
`;

export const SelectListHeaderCloseButtonText = styled.Text`
  text-transform: uppercase;
`;

export const SelectListHeaderInputContainer = styled.View`
  flex: 1;
  height: ${SELECT_LIST_HEADER_INPUT_SIZE};
  margin-left: 16;
  flex-direction: row;
  align-items: center;
  background-color: #FFF;
  border-radius: ${SELECT_LIST_HEADER_INPUT_BORDER_RADIUS};
  border-width: 1;
  border-color: ${SELECT_LIST_HEADER_BORDER_COLOR};
`;

export const SelectListHeaderInput = styled.TextInput`
  flex: 1;
  height: 100%;
  padding-left: 8;
  font-size: ${SELECT_LIST_HEADER_INPUT_FONT_SIZE};
`;

export const SelectListHeaderInputClearButton = styled.TouchableOpacity`
  margin-right: 8;
  width: ${SELECT_LIST_HEADER_INPUT_CLEAR_BUTTON_SIZE};
  height: ${SELECT_LIST_HEADER_INPUT_CLEAR_BUTTON_SIZE};
  background-color: ${SELECT_LIST_HEADER_CLEAR_BUTTON_COLOR};
  border-radius: ${SELECT_LIST_HEADER_INPUT_CLEAR_BUTTON_SIZE / 2};
  align-items: center;
  justify-content: center;
`;

export const SelectListHeaderInputClearButtonText = styled.Text`
  color: ${SELECT_LIST_HEADER_CLEAR_BUTTON_TEXT_COLOR};
  font-weight: bold;
`;
