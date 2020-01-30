import styled from 'styled-components';

const SELECT_LIST_ROW_HEIGHT = 64;
const SELECT_LIST_ROW_TEXT_FONT_SIZE = 16;

export const SelectListRowContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${SELECT_LIST_ROW_HEIGHT};
  background-color: #FFF;
  border-bottom-width: 1;
  border-color: #EEE;
  justify-content: center;
`;

export const SelectListRowText = styled.Text`
  font-size: ${SELECT_LIST_ROW_TEXT_FONT_SIZE};
  padding-right: 16;
  padding-left: 16;
`;
