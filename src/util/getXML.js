import parseXML from './parseXML';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const requestTimeout = 5000;

const fetchWithTimeout = (url, options, timeout) => new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);
  fetch(url, options).then(response => resolve(response), err => reject(err))
    .finally(() => clearTimeout(timer));
});

export default url => fetchWithTimeout(`${corsProxy}${url}`, { credentials: 'omit' }, requestTimeout)
  .then(blob => blob.text())
  .then((data) => {
    const { title, articles } = parseXML(data);
    const channel = { title, url };
    return { channel, newArticles: articles };
  });
