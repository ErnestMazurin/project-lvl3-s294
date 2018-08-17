import WatchJS from 'melanke-watchjs';

import handleInput from './handle/handleInput';
import handleSubmit from './handle/handleSubmit';
import renderJumbotron from './render/renderJumbotron';
import viewInput from './view/viewInput';
import viewChannels from './view/viewChannels';
import viewRequestStatus from './view/viewRequestStatus';

const state = {
  inputValue: '',
  isInputValid: false,
  requestStatus: '',
  channels: [],
};

// rss example
// https://lenta.ru/rss/news

export const updateState = newState => Object.assign(state, newState);

const init = () => {
  const root = document.getElementById('root');
  const jumbotron = renderJumbotron();
  root.appendChild(jumbotron);
};

export default () => {
  init();
  document.getElementById('rss-input').addEventListener('input', event => handleInput(event, state));
  document.getElementById('rss-submit').addEventListener('click', event => handleSubmit(event, state));

  const { watch } = WatchJS;

  watch(state, 'inputValue', () => viewInput(state));
  watch(state, 'channels', () => viewChannels(state));
  watch(state, 'requestStatus', () => viewRequestStatus(state));
};
