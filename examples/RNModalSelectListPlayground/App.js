import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import {
  ModalSelectList,
} from 'react-native-modal-select-list';

const staticModalOptions = [
  {
    label: 'Orange', value: 'orange',
  },
  {
    label: 'Apple', value: 'apple',
  },
  {
    label: 'Watermelon', value: 'watermelon',
  }
];

const App = () => {
  let modalRef;
  const openModal = () => modalRef.show();
  const saveModalRef = ref => modalRef = ref;
  const onSelectedOption = value => {
    console.log(`You selected: ${value}`);
  };
  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <Button title="Open Modal" onPress={openModal} />
      </SafeAreaView>
      <ModalSelectList
        ref={saveModalRef}
        placeholder={"Try something..."}
        closeButtonText={"Fechar"}
        options={staticModalOptions}
        onSelectedOption={onSelectedOption}
      />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
