export default (str) => {
  const parser = new DOMParser();
  const xmlDOM = parser.parseFromString(str, 'application/xml');
  const error = xmlDOM.querySelector('parsererror');

  if (error) {
    throw new Error('XML parse error');
  }

  const title = xmlDOM.querySelector('title').textContent;

  const articles = [...xmlDOM.querySelectorAll('item')]
    .map((item) => {
      const articleTitle = item.querySelector('title').textContent;
      const description = item.querySelector('description') ? item.querySelector('description').textContent : '';
      const link = item.querySelector('link').innerHTML;
      const pubDate = Date.parse(item.querySelector('pubDate').textContent);

      return {
        articleTitle, description, link, pubDate,
      };
    });

  articles.sort((a, b) => b.pubDate - a.pubDate);

  return { title, articles };
};
