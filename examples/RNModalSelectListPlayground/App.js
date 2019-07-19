import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import {
  ModalSelectList,
} from 'react-native-modal-select-list';

console.disableYellowBox = true;

const createRandomString = (length = 10) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const createStaticModalOptions = () => {
  const options = [];
  for (let i = 0; i < 20; i++) {
    const word = createRandomString();
    options.push({ label: word, value: word });
  }
  return options;
};

const modalOptionsProvider = ({ page, pageSize, customFilterKey }) => {
  let options = [];
  for (let i = 0; i < pageSize; i++) {
    const randomString = createRandomString();
    // const index = (i + (pageSize * (page - 1)));
    options.push({
      label: randomString,
      value: randomString,
    });
  }
  if (!!customFilterKey) {
    options = options.filter(option => new RegExp(`^.*?(${customFilterKey}).*?$`).test(option.label));
  }
  return new Promise(resolve => setTimeout(() => resolve(options), 1000));
};

const resolveFilters = () => ({
  a: 1,
});

const staticModalOptions = createStaticModalOptions();

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
        placeholder={"Text something..."}
        closeButtonText={"Close"}
        options={staticModalOptions}
        onSelectedOption={onSelectedOption}
        disableTextSearch={false}
        provider={modalOptionsProvider}
        pageSize={40}
        inputName="customFilterKey"
        filter={resolveFilters}
        headerTintColor="purple"
        buttonTextColor="white"
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
