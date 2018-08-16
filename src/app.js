import $ from 'jquery';
import WatchJS from 'melanke-watchjs';

import handleInput from './handle/handleInput';
import handleSubmit from './handle/handleSubmit';
import renderJumbotron from './render/renderJumbotron';
import viewInput from './view/viewInput';
import viewChannels from './view/viewChannels';
import viewAlert from './view/viewAlert';

const state = {
  inputValue: '',
  isInputValid: false,
  isRequestFailure: false,
  channels: [],
};

// rss example
// https://lenta.ru/rss/news

export const updateState = newState => Object.assign(state, newState);

const init = () => $('#root').append(renderJumbotron());

export default () => {
  $(document).ready(init());
  $('#rss-input').on('input', event => handleInput(event, state));
  $('#rss-submit').on('click', event => handleSubmit(event, state));

  const { watch } = WatchJS;

  watch(state, 'inputValue', () => viewInput(state));
  watch(state, 'channels', () => viewChannels(state));
  watch(state, 'isRequestFailure', () => viewAlert(state));
};
