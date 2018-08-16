import $ from 'jquery';
import _ from 'lodash';

import renderChannel from '../render/renderChannel';

export default ({ channels }) => {
  const last = _.last(channels);
  const card = renderChannel(last);
  $('#rss-accordion').append(card);
};
