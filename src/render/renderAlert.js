export default (type, text) => {
  const div = document.createElement('div');
  div.className = `alert alert-${type}`;
  div.textContent = text;
  return div;
};
