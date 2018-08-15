
import { updateState } from '../app';
import isUrl from '../util/urlValidator';

export default (event, state) => {
  event.preventDefault();
  const { value } = event.target;
  const { channels } = state;
  const isValid = isUrl(value, channels);

  updateState({ ...state, inputValue: value, isValid });
};
