import _ from 'lodash';

import renderChannel from '../render/renderChannel';
import renderArticle from '../render/renderArticle';

export default ({ channels, articles }) => {
  const newChannel = _.last(channels);
  const newArticles = articles.filter(a => a.channelId === newChannel.id);

  const accordion = document.getElementById('rss-channels');
  const card = renderChannel(newChannel);

  const ul = card.querySelector('ul.list-group');
  const list = newArticles.map((article, index) => renderArticle(article, index));

  list.forEach(li => ul.appendChild(li));

  accordion.appendChild(card);
};
