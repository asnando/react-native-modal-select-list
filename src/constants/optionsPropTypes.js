import PropTypes from 'prop-types';

export default {
  // Options is an array with static objects to be displayed
  // in the list. Each option object must have a label (to display
  // in the list), and a value which will be returned to the parent component
  // on selection.
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
      ]),
    }),
  ),
  // Provider is a custom function that can be used to fetch any async
  // data. The function can return a promise. The returned value from that
  // function must be in the same format as the options array above.
  provider: PropTypes.func,
  // Number of rows returned by every page request of the provider.
  pageSize: PropTypes.number,
  // The key where the value of the header input text will be stored in the
  // filter object that is passed down to the provider function.
  inputName: PropTypes.string,
  // Filter is a object(or function that returns a object) that represents all
  // the conditional values to be used by the provider function when it make
  // the data requests.
  filter: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  // Maximum number of lines to display for row text.
  numberOfLines: PropTypes.number,
};
