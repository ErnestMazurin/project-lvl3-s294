const renderLi = ({ articleTitle, link, description }, index, id) => {
  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerHTML = `
  <button type="button" class="btn text-dark" data-toggle="modal" data-target="#article${id}${index}">
    ${articleTitle}
  </button>

  <div class="modal fade" id="article${id}${index}" tabindex="-1" role="dialog" aria-labelledby="article${id}${index}Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title" id="article${id}${index}Label">${articleTitle}<h5/>
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
    <div/>`;

  return li;
};

export default ({ id, title, articles }) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-header" id="header${id}">
      <h5 class="mb-0">
        <button type="button" class="btn btn-link text-body" data-toggle="collapse" data-target="#body${id}" aria-extended="true" aria-controls="body${id}">
          ${title}
        </button>
      </h5>
    </div>
    <div class="collapse show" id="body${id}" aria-labelledby="header${id}" data-parent="#rss-accordion">
      <div class="card-body">
        <ul class="list-group"></ul>
      </div>
    </div>`;

  const ul = card.querySelector('ul');
  articles.forEach((article, index) => ul.appendChild(renderLi(article, index, id)));

  return card;
};
