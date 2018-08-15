import $ from 'jquery/dist/jquery.min';

export default () => {
  const container = $('<div/>', { class: 'container' });

  const div = $('<div/>', { class: 'jumbotron py-1 mt-3' }).appendTo(container);

  $('<h1/>', { class: 'display-4', text: 'RSS reader' }).appendTo(div);
  $('<input/>', {
    class: 'w-100 form-control is-valid', value: '', type: 'text', placeholder: 'Add new RSS feed URL here ...', 'data-element': 'rss-input',
  }).appendTo(div);
  $('<hr/>', { class: 'my-2' }).appendTo(div);

  const bottomContainer = $('<div/>', { class: 'container' }).appendTo(div);
  const row = $('<div/>', { class: 'row' }).appendTo(bottomContainer);
  const aCol = $('<div/>', { class: 'col-2 px-0' }).appendTo(row);
  $('<div/>', { class: 'col-10 px-0', 'data-element': 'rss-alert' }).appendTo(row);

  $('<a/>', {
    class: 'btn btn-success btn-lg', text: 'Add', href: '', role: 'button', 'data-element': 'rss-submit',
  }).appendTo(aCol);

  $('<div/>', { class: 'accordion', id: 'rss-accordion' }).appendTo(container);

  return container;
};
