export default (str) => {
  const parser = new DOMParser();
  const xmlDOM = parser.parseFromString(str, 'application/xml');

  const title = xmlDOM.querySelector('title').textContent;

  const articles = [...xmlDOM.querySelectorAll('item')].map((item) => {
    const articleTitle = item.querySelector('title').textContent;
    const description = item.querySelector('description') ? item.querySelector('description').textContent : '';
    const link = item.querySelector('link').innerHTML;
    return { articleTitle, description, link };
  });

  return { title, articles };
};
