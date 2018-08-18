import _ from 'lodash';

import renderArticle from '../render/renderArticle';

export default (newArticles, oldArticles) => {
  const diff = _.differenceBy(newArticles, oldArticles, a => a.articleTitle);
  const channelIds = _.uniq(diff.map(a => a.channelId));

  channelIds.forEach((channelId) => {
    const collapse = document.getElementById(`channel-collapse-${channelId}`);
    const ul = collapse.querySelector('ul.list-group');

    const list = diff.map(a => renderArticle(a, a.id));
    ul.prepend(...list);
  });
};
