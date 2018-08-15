import { updateState } from '../app';

export default (event, state) => {
  event.preventDefault();
  const { inputValue, channels, isValid } = state;
  if (!isValid) {
    return;
  }

  updateState({ inputValue: '', channels: [...channels, inputValue] });
};
