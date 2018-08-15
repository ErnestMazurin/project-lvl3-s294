import validator from 'validator';

export default (url, channels) => {
  const isNotContains = !(channels.indexOf(url) > -1);
  const isURL = validator.isURL(url);
  return isURL && isNotContains;
};
