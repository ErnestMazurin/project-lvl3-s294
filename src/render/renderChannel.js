import handleModal from '../handle/handleModal';

const renderLi = ({ articleTitle, link, description }, index) => {
  const li = document.createElement('li');
  li.classList.add('list-group-item');
  if (index % 2 !== 0) {
    li.classList.add('bg-light');
  }

  li.innerHTML = `
  <div class="d-flex justify-content-between">
    <div>${articleTitle}</div>
    <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#rss-modal">More</button>
  </div>`;

  li.querySelector('button').addEventListener('click', handleModal(articleTitle, link, description));
  return li;
};

export default ({ title, articles, id }) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-header" id="channel-header-${id}">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed text-dark" type="button" data-toggle="collapse" data-target="#channel-collapse-${id}" aria-expanded="false" aria-controls="channel-collapse-${id}">
          ${title}
        </button>
      </h5>
    </div>
    <div id="channel-collapse-${id}" class="collapse" aria-labelledby="#channel-header-${id}" data-parent="#rss-channels">
      <div class="card-body p-0">
        <ul class="list-group"></ul>
      </div>
    </div>`;

  const ul = card.querySelector('ul');
  articles.forEach((article, index) => ul.appendChild(renderLi(article, index)));
  return card;
};
