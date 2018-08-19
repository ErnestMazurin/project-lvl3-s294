import { getState, updateState } from '../model/state';
import validateURL from '../util/validateURL';

export default (event) => {
  event.preventDefault();
  const state = getState();
  const { channels } = state;
  const { value } = event.target;
  const isValid = validateURL(value, channels);

  updateState({ ...state, input: { value, isValid } });
};
