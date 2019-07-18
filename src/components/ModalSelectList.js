import React, { PureComponent } from 'react';
import { Modal } from 'react-native';
import PropTypes from 'prop-types';
import optionsDefaultProps from '../constants/optionsDefaultProps';
import optionsPropTypes from '../constants/optionsPropTypes';
import SelectList from './SelectList';

const initialState = {
  visible: false,
};

class ModalSelectList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  show(callback) {
    return this.setState({ visible: true }, callback);
  }

  dismiss(callback) {
    return this.setState({ visible: false }, callback);
  }

  handleModalCloseRequest() {
    return this.dismiss();
  }

  handleRowSelection(value) {
    const { onSelectedOption } = this.props;
    this.dismiss(() => {
      if (typeof onSelectedOption === 'function') {
        onSelectedOption(value);
      }
    });
  }

  render() {
    const { visible } = this.state;
    const { props } = this;
    return (
      <Modal visible={visible} animationType="slide">
        <SelectList
          {...props}
          onCloseModalRequest={() => this.handleModalCloseRequest()}
          onRowSelected={(...args) => this.handleRowSelection(...args)}
        />
      </Modal>
    );
  }
}

ModalSelectList.defaultProps = {
  ...optionsDefaultProps,
  onSelectedOption: null,
};

ModalSelectList.propTypes = {
  ...optionsPropTypes,
  onSelectedOption: PropTypes.func,
};

export default ModalSelectList;
