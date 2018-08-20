import parseXML from './parseXML';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';

export default url => fetch(`${corsProxy}${url}`, { credentials: 'omit' })
  .then(blob => blob.text())
  .then((data) => {
    const { title, articles } = parseXML(data);
    const channel = { title, url };
    return { channel, newArticles: articles };
  });
