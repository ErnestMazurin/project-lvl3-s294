import WatchJS from 'melanke-watchjs';

import handleInput from './handle/handleInput';
import handleSubmit from './handle/handleSubmit';
import handleUpdate from './handle/handleUpdate';
import renderJumbotron from './render/renderJumbotron';
import viewInput from './view/viewInput';
import viewNewChannel from './view/viewNewChannel';
import viewRequestStatus from './view/viewRequestStatus';
import viewUpdateChannel from './view/viewUpdateChannel';

const state = {
  inputValue: '',
  isInputValid: false,
  requestStatus: '',
  lastAction: '',
  channels: [],
  articles: [],
};

// rss example
// http://lorem-rss.herokuapp.com/feed?unit=second

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
  setInterval(handleUpdate, 5000, state);

  const { watch } = WatchJS;

  watch(state, 'inputValue', () => viewInput(state));

  watch(state, 'channels', () => {
    if (state.lastAction === 'add-channel') {
      viewNewChannel(state);
    }
  });

  watch(state, 'articles', (prop, action, newArticles, oldArticles) => {
    if (state.lastAction === 'update-channel') {
      viewUpdateChannel(newArticles, oldArticles);
    }
  });

  watch(state, 'requestStatus', () => viewRequestStatus(state));
};
