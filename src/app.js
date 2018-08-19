import WatchJS from 'melanke-watchjs';

import { getState } from './model/state';
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
  init();
  document.getElementById('rss-input').addEventListener('input', event => handleInput(event));
  document.getElementById('rss-submit').addEventListener('click', event => handleSubmit(event));
  setInterval(handleUpdate, 5000);

  const { watch } = WatchJS;
  const state = getState();

  watch(state, 'input', (prop, action, newInput) => viewInput(newInput));
  watch(state, 'channels', (prop, action, newChannels, oldChannels) => viewNewChannel(newChannels, oldChannels));
  watch(state, 'articles', (prop, action, newArticles, oldArticles) => viewNewArticles(newArticles, oldArticles));
  watch(state, 'requestStatus', (prop, action, newRequestStatus) => viewRequestStatus(newRequestStatus));
};
