import _ from 'lodash';
import validator from 'validator';

export default (url, channels) => {
  const isNotContains = _.findIndex(channels, channel => channel.url === url) < 0;
  const isURL = validator.isURL(url);
  return isURL && isNotContains;
};
