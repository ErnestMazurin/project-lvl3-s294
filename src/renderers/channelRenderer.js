import $ from 'jquery/dist/jquery.min';

import modalRenderer from './modalRenderer';

export default (channel) => {
  const { id } = channel;

  const card = $('<div/>', { class: 'card' });
  const cardHeader = $('<div/>', { class: 'card-header', id: `header-${id}` }).appendTo(card);
  const h5 = $('<h5/>', { class: 'mb-0' }).appendTo(cardHeader);
  $('<button/>', {
    text: channel.title,
    class: 'btn btn-link text-body',
    type: 'button',
    'data-toggle': 'collapse',
    'data-target': `#body-${id}`,
    'aria-extended': 'true',
    'aria-controls': `body-${id}`,
  }).appendTo(h5);

  const collapse = $('<div/>', {
    id: `body-${id}`,
    class: 'collapse show',
    'aria-labelledby': `header-${id}`,
    'data-parent': '#rss-accordion',
  }).appendTo(card);

  const body = $('<div/>', { class: 'card-body' }).appendTo(collapse);

  const ul = $('<ul/>', { class: 'list-group' }).appendTo(body);

  channel.articles.forEach(({ articleTitle, link, description }, index) => {
    const li = $('<li/>', { class: 'list-group-item' }).appendTo(ul);
    $('<button/>', {
      type: 'button',
      class: 'btn text-dark',
      text: articleTitle,
      'data-toggle': 'modal',
      'data-target': `#article-${id}-${index}`,
    }).appendTo(li);

    const modal = modalRenderer({ articleTitle, link, description }, index, id);
    modal.appendTo(li);
  });

  return card;
};
