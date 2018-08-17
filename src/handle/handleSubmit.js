import { updateState } from '../app';
import getXML from '../util/getXML';

export default (event, state) => {
  event.preventDefault();
  const { inputValue, channels, isInputValid } = state;
  if (!isInputValid) {
    return;
  }

  updateState({ ...state, requestStatus: 'processing' });

  getXML(inputValue)
    .then(channel => updateState({
      ...state, inputValue: '', channels: [...channels, channel], requestStatus: 'success',
    }))
    .catch(() => updateState({ ...state, inputValue, requestStatus: 'failure' }));
};
