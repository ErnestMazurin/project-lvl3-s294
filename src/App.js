// @flow
import $ from 'jquery/dist/jquery.min';
import Jumbotron from './component/Jumbotron';

export default class App {
  element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  render() {
    const jumb = new Jumbotron('RSS reader', 'Add new RSS feed URL here ...');
    $(this.element).append(jumb.render());
  }
}
