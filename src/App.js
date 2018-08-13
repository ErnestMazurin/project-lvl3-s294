// @flow
import $ from 'jquery/dist/jquery.min';
import Jumbotron from './component/Jumbotron';

export default class App {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  render() {
    const jumb = new Jumbotron('Add RSS channel', 'rss here ...');
    $(this.element).append(jumb.render());
  }
}
