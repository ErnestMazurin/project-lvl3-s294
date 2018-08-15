
import { updateState } from '../app';
import isUrl from '../util/urlValidator';

export default (event, state) => {
  event.preventDefault();
  const { value } = event.target;
  const { channels } = state;
  const isInputValid = isUrl(value, channels);

  updateState({ ...state, inputValue: value, isInputValid });
};
