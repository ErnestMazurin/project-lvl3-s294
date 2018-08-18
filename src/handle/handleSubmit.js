import { updateState } from '../app';
import getXML from '../util/getXML';
import setChannelId from '../util/setChannelId';
import setArticlesId from '../util/setArticlesId';

export default (event, state) => {
  event.preventDefault();
  const {
    inputValue, channels, articles, isInputValid,
  } = state;

  if (!isInputValid) {
    return;
  }

  updateState({ ...state, requestStatus: 'processing' });

  getXML(inputValue)
    .then(({ channel, newArticles }) => {
      const channelWithId = setChannelId(channel, state);
      const articlesWithIds = setArticlesId(newArticles, channelWithId.id, state);

      updateState({
        ...state,
        inputValue: '',
        requestStatus: 'success',
        lastAction: 'add-channel',
        channels: [...channels, channelWithId],
        articles: [...articles, ...articlesWithIds],
      });
    })
    .catch(() => updateState({ ...state, inputValue, requestStatus: 'failure' }));
};
