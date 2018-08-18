import handleModal from '../handle/handleModal';

export default (article, index) => {
  const {
    articleTitle, link, description, pubDate,
  } = article;

  const options = {
    hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric',
  };
  const date = new Date(pubDate).toLocaleString('ru', options);

  const li = document.createElement('li');
  li.classList.add('list-group-item');
  if (index % 2 !== 0) {
    li.classList.add('bg-light');
  }

  li.innerHTML = `
  <div class="d-flex justify-content-between">
    <div>
      <p class="m-0">${articleTitle}</p>
      <small>Posted: ${date}</small>
    </div>
    <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#rss-modal">More</button>
  </div>`;

  li.querySelector('button').addEventListener('click', handleModal(articleTitle, link, description));
  return li;
};
