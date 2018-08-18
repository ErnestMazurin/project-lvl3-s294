export default ({ title, id }) => {
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

  return card;
};
