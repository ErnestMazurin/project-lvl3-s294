// @flow

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import $ from 'jquery/dist/jquery.min';

export default () => {
  const container = $('<div/>', { class: 'container' });

  const div = $('<div/>', { class: 'jumbotron py-1 mt-3' }).appendTo(container);

  $('<h1/>', { class: 'display-4', text: 'RSS reader' }).appendTo(div);

  $('<input/>', {
    class: 'w-100 form-control is-valid', value: '', type: 'text', placeholder: 'Add new RSS feed URL here ...', 'data-element': 'rss-input',
  }).appendTo(div);

  $('<hr/>', { class: 'my-4' }).appendTo(div);

  $('<a/>', {
    class: 'btn btn-success btn-lg', text: 'Add', href: '', role: 'button', 'data-element': 'rss-submit',
  }).appendTo(div);

  $('<ul/>', { class: 'list-group', 'data-element': 'rss-list' }).appendTo(container);

  return container;
};
