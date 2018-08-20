import validateURL from '../util/validateURL';

export default (event, state, updateState) => {
  event.preventDefault();
  const { channels } = state;
  const { value } = event.target;
  const isValid = validateURL(value, channels);

  updateState({ ...state, input: { value, isValid } });
};
