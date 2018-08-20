import _ from 'lodash';

import getXML from '../util/getXML';
import setChannelId from '../util/setChannelId';
import setArticlesId from '../util/setArticlesId';

const updateChannel = (channel, state, updateState) => {
  const { articles } = state;
  const lastArticleDate = _.max(articles.map(a => a.pubDate));

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
    .then(() => setTimeout(updateChannel, 5000, channel, state, updateState))
    .catch((e) => {
      console.log(e);
      setTimeout(updateChannel, 5000, channel, state, updateState);
    });
};

export default (event, state, updateState) => {
  event.preventDefault();
  const {
    input, channels, articles,
  } = state;

  if (!input.isValid) {
    return;
  }

  updateState({ ...state, requestStatus: 'processing' });

  getXML(input.value)
    .then(({ channel, newArticles }) => {
      const channelWithId = setChannelId(channel, state);
      const articlesWithIds = setArticlesId(newArticles, channelWithId.id, state);

      updateState({
        ...state,
        input: { value: '', isValid: false },
        requestStatus: 'success',
        channels: [...channels, channelWithId],
        articles: [...articles, ...articlesWithIds],
      });

      updateChannel(channelWithId, state, updateState);
    })
    .catch(() => updateState({ ...state, requestStatus: 'failure' }));
};
