// @flow

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import $ from 'jquery/dist/jquery.min';

import '../css/Jumbotron.css';

export default class Jumbotron {
  title: String;

  placeholder: String;

  constructor(title: String, placeholder: String) {
    this.title = title;
    this.placeholder = placeholder;
  }

  onAdd = (event) => {
    event.preventDefault();
    console.log('click!');
  }

  render() {
    const div = $('<div/>', { class: 'jumbotron' });

    $('<h1/>', { class: 'display-4', text: this.title }).appendTo(div);

    $('<input/>', { type: 'text', placeholder: this.placeholder }).appendTo(div);

    $('<hr/>', { class: 'my-4' }).appendTo(div);

    $('<a/>', {
      class: 'btn btn-success btn-lg', text: 'Add', href: '', role: 'button', click: this.onAdd,
    })
      .appendTo(div);

    return div;
  }
}
