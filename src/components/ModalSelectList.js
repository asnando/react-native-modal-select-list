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

  modalWillHide(callback) {
    const { selectList: selectListComponent } = this;
    selectListComponent.modalWillHide();
    callback();
  }

  show(callback) {
    return this.setState({ visible: true }, callback);
  }

  dismiss(callback) {
    this.modalWillHide(() => {
      this.setState({ visible: false }, callback);
    });
  }

  handleModalCloseRequest() {
    const { onClosedModal } = this.props;
    this.dismiss(() => {
      if (typeof onClosedModal === 'function') {
        onClosedModal();
      }
    });
  }

  handleRowSelection(value) {
    const { onSelectedOption } = this.props;
    this.dismiss(() => {
      if (typeof onSelectedOption === 'function') {
        onSelectedOption(value);
      }
    });
  }

  saveListRef(ref) {
    this.selectList = ref;
  }

  render() {
    const { visible } = this.state;
    const { props } = this;
    return (
      <Modal visible={visible} animationType="slide">
        <SelectList
          {...props}
          ref={(...args) => this.saveListRef(...args)}
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
  onClosedModal: PropTypes.func,
};

export default ModalSelectList;
