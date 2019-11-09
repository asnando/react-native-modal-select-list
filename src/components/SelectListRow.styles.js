import styled from 'styled-components';

const SELECT_LIST_ROW_HEIGHT = 64;
const SELECT_LIST_ROW_TEXT_FONT_SIZE = 16;

export const SelectListRowContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${SELECT_LIST_ROW_HEIGHT};
  background-color: #FFF;
  justify-content: center;
`;

export const SelectListRowContainerDisabled = styled.View`
  width: 100%;
  height: ${SELECT_LIST_ROW_HEIGHT};
  background-color: #FFF;
  justify-content: center;
`;

export const SelectListRowText = styled.Text`
  font-size: ${SELECT_LIST_ROW_TEXT_FONT_SIZE};
  padding-left: 16;
`;

export const SelectListRowButtonContainer = styled.View`
  margin-top: 15;
  margin-left: 10
`;

export const SelectListRowButton = styled.Button`

`;
