import $ from 'jquery/dist/jquery.min';

export default ({ articleTitle, link, description }, index, id) => {
  const modal = $('<div/>', {
    class: 'modal fade',
    id: `article-${id}-${index}`,
    tabindex: '-1',
    role: 'dialog',
    'aria-labelledby': `article-${id}-${index}-title`,
    'aria-hidden': 'true',
  });
  const modalDialog = $('<div/>', { class: 'modal-dialog', role: 'document' }).appendTo(modal);
  const modalContent = $('<div/>', { class: 'modal-content' }).appendTo(modalDialog);

  const modalHeader = $('<div/>', { class: 'modal-header' }).appendTo(modalContent);
  $('<h5/>', { class: 'modal-title', id: `article-${id}-${index}-title`, text: articleTitle }).appendTo(modalHeader);
  const closeBtn = $('<button/>', {
    type: 'button',
    class: 'close',
    'data-dismiss': 'modal',
    'aria-label': 'close',
  }).appendTo(modalHeader);
  $('<span/>', { 'aria-hidden': 'true', text: '&times;' }).appendTo(closeBtn);

  $('<div/>', { class: 'modal-body', text: description }).appendTo(modalContent);

  const modalFooter = $('<div/>', { class: 'modal-footer' }).appendTo(modalContent);

  $('<button/>', {
    type: 'button',
    class: 'btn btn-secondary',
    'data-dismiss': 'modal',
    text: 'Close',
  }).appendTo(modalFooter);

  $('<button/>', {
    class: 'btn btn-primary',
    type: 'button',
    href: link,
    text: 'See more',
  }).appendTo(modalFooter);

  return modal;
};
