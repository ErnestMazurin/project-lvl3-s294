import _ from 'lodash';

import renderArticle from '../render/renderArticle';

export default (newArticles, oldArticles) => {
  const diff = _.differenceBy(newArticles, oldArticles, a => a.articleTitle);
  const { channelId } = diff[0];

  // console.log(diff);

  const collapse = document.getElementById(`channel-collapse-${channelId}`);
  const ul = collapse.querySelector('ul.list-group');

  const list = diff.map(a => renderArticle(a, a.id));
  ul.prepend(...list);
};
