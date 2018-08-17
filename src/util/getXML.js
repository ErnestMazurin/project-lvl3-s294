import _ from 'lodash';

import parseXML from './parseXML';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';

export default url => fetch(`${corsProxy}${url}`)
  .then(blob => blob.text())
  .then((data) => {
    const channel = parseXML(data);

    if (!channel.title || !channel.articles) {
      throw new Error('XML parse error');
    }

    const id = _.uniqueId();
    return { ...channel, url, id };
  });
