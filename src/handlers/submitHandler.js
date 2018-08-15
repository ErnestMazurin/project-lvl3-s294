import { updateState } from '../app';
import xmlGetter from '../util/xmlGetter';

export default (event, state) => {
  event.preventDefault();
  const { inputValue, channels, isInputValid } = state;
  if (!isInputValid) {
    return;
  }

  xmlGetter(inputValue)
    .then(channel => updateState({
      ...state, inputValue: '', channels: [...channels, channel], isProblem: false,
    }))
    .catch(() => updateState({ ...state, inputValue: '', isProblem: true }));
};
