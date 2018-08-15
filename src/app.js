// @flow
import $ from 'jquery/dist/jquery.min';
import WatchJS from 'melanke-watchjs';
import inputHandler from './handlers/inputHandler';
import submitHandler from './handlers/submitHandler';
import channel from './views/channel';
import jumbotron from './views/jumbotron';

const state = {
  inputValue: '',
  isValid: false,
  channels: [],
};

export const updateState = newState => Object.assign(state, newState);

const init = () => $('#root').append(jumbotron());

export default () => {
  $(document).ready(init());
  $('[data-element="rss-input"]').on('input', event => inputHandler(event, state));
  $('[data-element="rss-submit"]').on('click', event => submitHandler(event, state));

  const { watch } = WatchJS;
  watch(state, 'inputValue', () => {
    const { isValid, inputValue } = state;
    $('[data-element="rss-input"]').val(inputValue);
    if (isValid) {
      $('[data-element="rss-input"]').removeClass('is-invalid');
      $('[data-element="rss-input"]').addClass('is-valid');
    } else {
      $('[data-element="rss-input"]').removeClass('is-valid');
      $('[data-element="rss-input"]').addClass('is-invalid');
    }
  });


  watch(state, 'channels', () => {
    const last = state.channels[state.channels.length - 1];
    const li = channel(last);
    $('[data-element="rss-list"]').append(li);
  });
};
