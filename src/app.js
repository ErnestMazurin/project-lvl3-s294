import $ from 'jquery/dist/jquery.min';
import WatchJS from 'melanke-watchjs';

import inputHandler from './handlers/inputHandler';
import submitHandler from './handlers/submitHandler';
import jumbotronRenderer from './renderers/jumbotronRenderer';
import inputView from './views/inputView';
import channelsView from './views/channelsView';
import problemView from './views/problemView';

const state = {
  inputValue: '',
  isInputValid: false,
  isProblem: false,
  channels: [],
};

// rss example
// https://lenta.ru/rss/news

export const updateState = newState => Object.assign(state, newState);

const init = () => $('#root').append(jumbotronRenderer());

export default () => {
  $(document).ready(init());
  $('[data-element="rss-input"]').on('input', event => inputHandler(event, state));
  $('[data-element="rss-submit"]').on('click', event => submitHandler(event, state));

  const { watch } = WatchJS;

  watch(state, 'inputValue', () => inputView(state));
  watch(state, 'channels', () => channelsView(state));
  watch(state, 'isProblem', () => problemView(state));
};
