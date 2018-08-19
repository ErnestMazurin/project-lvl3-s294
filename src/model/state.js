const state = {
  input: { value: '', isValid: false },
  requestStatus: '',
  channels: [],
  articles: [],
};

export const updateState = newState => Object.assign(state, newState);

export const getState = () => state;
