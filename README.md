# react-native-modal-select-list
☝ React Native modal component to select options from list

# Usage
```jsx
import {
  ModalSelectList,
} from 'react-native-modal-select-list';

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
        numberOfLines={3}
      />
    </Fragment>
  );
};
```

# Props
| Name | Type | Description |
| ---- | ---- | ----------- |
| placeholder | String | Placeholder text that will be displayed in the header text input
| closeButtonText | String | Text for the modal close button
| closeButtonComponent | Component | Component for the modal close button (i.e : Svg Icon, Image...)
| onSelectedOption | Function | Callback that will receive the option value defined in the option definition object. Will be called when user selects one of the rows.
| onClosedModal | Function | Callback that will be called if the user closes the modal without a selection.
| disableTextSearch | Boolean | If must not display the header text input
| options[***](#options-object-format) | Array[Object] | Options is an array with static objects to be displayed in the list. Each option object must have a label (to display in the list), and a value which will be returned to the parent component on selection.
| provider | Function | Provider is a custom function that can be used to fetch any async data. The function can return a promise. The returned value from that function must be in the same format as the options array above.
| pageSize | Number | Number of rows returned by every page request of the provider.
| inputName | String | The key where the value of the header input text will be stored in the filter object that is passed down to the provider function.
| filter | Object/Function | Filter is a object(or function that returns a object) that represents all the conditional values to be used by the provider function when it make the data requests.
| headerTintColor | String | Custom color for header background
| buttonTextColor | String | Custom color for header text labels
| numberOfLines | Number | Maximum number of lines to display for row text

# Options object format
The options (from the static list or from the resolver returned value) must be an object containing the following key definitions:

| Key | Type | Description |
| --- | ---- | ----------- |
| label | String | Text to be displayed on the row.
| value | Any | The value that will be returned when the user selects the row.

# Static options filtering
When provider function is not defined and the component prefers to use the static options array, if the user edit the header input text value it will automatically filter the static options array looking for the input text in the middle of the options ```label(s)``` string.

# Methods
| Name | Description |
| ---- | ----------- |
| show | Shows the select list and wait until the onSelectedOption callback is called to close it.
| dismiss | Manually dismiss the select list.

# Examples
See the ```examples/RNModalSelectListPlayground``` app and play with it.

![react-native-modal-select-list-example](https://user-images.githubusercontent.com/33915907/61548192-79781180-aa23-11e9-8956-0c0a312b916d.gif)
