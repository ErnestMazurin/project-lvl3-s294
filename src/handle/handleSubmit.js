import { updateState } from '../app';
import getXML from '../util/getXML';

export default (event, state) => {
  event.preventDefault();
  const { inputValue, channels, isInputValid } = state;
  if (!isInputValid) {
    return;
  }

  getXML(inputValue)
    .then(channel => updateState({
      ...state, inputValue: '', channels: [...channels, channel], isRequestFailure: false,
    }))
    .catch(() => updateState({ ...state, inputValue: '', isRequestFailure: true }));
};
