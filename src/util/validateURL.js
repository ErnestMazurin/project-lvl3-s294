import _ from 'lodash';
import validator from 'validator';

export default (link, channels) => {
  const isContains = _.find(channels, ({ url }) => url === link);
  const isURL = validator.isURL(link);
  return isURL && !isContains;
};
