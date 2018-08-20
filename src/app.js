import WatchJS from 'melanke-watchjs';

import handleInput from './handle/handleInput';
import handleSubmit from './handle/handleSubmit';
import handleUpdate from './handle/handleUpdate';
import renderJumbotron from './render/renderJumbotron';
import viewInput from './view/viewInput';
import viewNewChannel from './view/viewNewChannel';
import viewRequestStatus from './view/viewRequestStatus';
import viewNewArticles from './view/viewNewArticles';

// rss example
// http://lorem-rss.herokuapp.com/feed?unit=second

const init = () => {
  const root = document.getElementById('root');
  const jumbotron = renderJumbotron();
  root.appendChild(jumbotron);
};

export default () => {
  const state = {
    input: { value: '', isValid: false },
    requestStatus: '',
    channels: [],
    articles: [],
  };

  const updateState = newState => Object.assign(state, newState);

  init();
  document.getElementById('rss-input').addEventListener('input', event => handleInput(event, state, updateState));
  document.getElementById('rss-submit').addEventListener('click', event => handleSubmit(event, state, updateState));
  setInterval(handleUpdate, 5000, state, updateState);

  const { watch } = WatchJS;

  watch(state, 'input', (prop, action, newInput) => viewInput(newInput));
  watch(state, 'channels', (prop, action, newChannels, oldChannels) => viewNewChannel(newChannels, oldChannels));
  watch(state, 'articles', (prop, action, newArticles, oldArticles) => viewNewArticles(newArticles, oldArticles));
  watch(state, 'requestStatus', (prop, action, newRequestStatus) => viewRequestStatus(newRequestStatus));
};
