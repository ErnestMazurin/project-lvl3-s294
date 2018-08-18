
export default (newArticles, channelId, { articles }) => {
  const first = articles.length;
  return newArticles.map((a, i) => ({ ...a, channelId, id: first + i }));
};
