import _ from 'lodash';

import renderChannel from '../render/renderChannel';

export default (newChannels, oldChannels) => {
  const newChannel = _.xor(newChannels, oldChannels)[0];
  const accordion = document.getElementById('rss-channels');
  const card = renderChannel(newChannel);

  accordion.appendChild(card);
};
