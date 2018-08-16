
import { updateState } from '../app';
import validateURL from '../util/validateURL';

export default (event, state) => {
  event.preventDefault();
  const { value } = event.target;
  const { channels } = state;
  const isInputValid = validateURL(value, channels);

  updateState({ ...state, inputValue: value, isInputValid });
};
