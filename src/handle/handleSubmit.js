import { getState, updateState } from '../model/state';
import getXML from '../util/getXML';
import setChannelId from '../util/setChannelId';
import setArticlesId from '../util/setArticlesId';

export default (event) => {
  event.preventDefault();
  const state = getState();
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
    })
    .catch(() => updateState({ ...state, requestStatus: 'failure' }));
};
