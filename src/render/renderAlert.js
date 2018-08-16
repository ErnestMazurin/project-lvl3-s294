export default () => {
  const div = document.createElement('div');
  div.className = 'alert alert-danger';
  div.textContent = 'Something went wrong';
  return div;
};
