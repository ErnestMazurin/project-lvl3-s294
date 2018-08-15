import $ from 'jquery/dist/jquery.min';
import _ from 'lodash';

import channelRenderer from '../renderers/channelRenderer';

export default (state) => {
  const last = _.last(state.channels);
  const card = channelRenderer(last);
  $('#rss-accordion').append(card);
};
