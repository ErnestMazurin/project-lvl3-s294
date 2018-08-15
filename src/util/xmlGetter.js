import _ from 'lodash';

import xmlParser from './xmlParser';

const corsProxy = 'https://cors-anywhere.herokuapp.com/';

export default url => fetch(corsProxy + url)
  .then(blob => blob.text())
  .then((data) => {
    const channel = xmlParser(data);
    const id = _.uniqueId();
    return { ...channel, url, id };
  });
