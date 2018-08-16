import _ from 'lodash';

import renderChannel from '../render/renderChannel';

export default ({ channels }) => {
  const last = _.last(channels);

  const accordion = document.getElementById('rss-channels');
  const card = renderChannel(last);
  accordion.appendChild(card);
};
