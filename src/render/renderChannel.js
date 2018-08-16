import $ from 'jquery';

const renderLi = ({ articleTitle, link, description }, index, id) => $('<li/>', { class: 'list-group-item' }).html(`
  <button type="button" class="btn text-dark" data-toggle="modal" data-target="#article-${id}-${index}">
    ${articleTitle}
  </button>

  <div class="modal fade" id="article-${id}-${index}" tabindex="-1" role="dialog" aria-labelledby="article-${id}-${index}-title" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="article-${id}-${index}-title">${articleTitle}<h5/>
          <button type="button" class="close" data-dismiss="modal" aria-label="close">
            <span aria-hidden="true">&times;</span>
          <button/>
        </div>
        <div class="modal-body">${description}</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" href="${link}">See more</button>
        </div>
      </div>
    <div/>`);

export default ({ id, title, articles }) => {
  const card = $('<div/>', { class: 'card' }).html(`
    <div class="card-header" id="header-${id}">
      <h5 class="mb-0">
        <button type="button" class="btn btn-link text-body" data-toggle="collapse" data-target="#body-${id}" aria-extended="true" aria-controls="body-${id}">
          ${title}
        </button>
      </h5>
    </div>
    <div class="collapse show" id="body-${id}" aria-labelledby="header-${id}" data-parent="#rss-accordion">
      <div class="card-body">
        <ul class="list-group"></ul>
      </div>
    </div>`);

  const ul = card.find('ul');

  articles.forEach((article, index) => renderLi(article, index, id).appendTo(ul));

  return card;
};
