import styled from 'styled-components';

const SELECT_LIST_ROW_HEIGHT = 64;
const SELECT_LIST_ROW_TEXT_FONT_SIZE = 16;

export const SelectListRowContainer = styled.TouchableOpacity`
  width: 100%;
  min-height: ${SELECT_LIST_ROW_HEIGHT};
  background-color: #FFF;
  border-bottom-width: ${({ isLastRow }) => (isLastRow ? 0 : 1)};
  border-color: #EEE;
  justify-content: center;
`;

export const SelectListRowText = styled.Text`
  font-size: ${SELECT_LIST_ROW_TEXT_FONT_SIZE};
  padding-top: 16;
  padding-right: 16;
  padding-bottom: 16;
  padding-left: 16;
  line-height: 32;
`;
