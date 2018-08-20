import _ from 'lodash';

import getXML from '../util/getXML';
import setArticlesId from '../util/setArticlesId';

export default (state, updateState) => {
  const { channels, articles } = state;
  if (channels.length === 0) {
    return;
  }

  const lastArticleDate = _.max(articles.map(a => a.pubDate));

  channels.forEach((channel) => {
    getXML(channel.url)
      .then(({ newArticles }) => {
        const diff = _.xorBy(newArticles, articles, a => a.articleTitle)
          .filter(a => a.pubDate > lastArticleDate);

        if (diff.length !== 0) {
          const articlesWithIds = setArticlesId(diff, channel.id, state);
          updateState({
            ...state, articles: [...articles, ...articlesWithIds],
          });
        }
      })
      .catch(e => console.log(e));
  });
};
