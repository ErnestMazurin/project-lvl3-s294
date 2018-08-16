export default (articleTitle, link, description) => () => {
  const modalTitle = document.getElementById('rss-modalLabel');
  const modalBody = document.getElementById('rss-modalBody');
  const modalButton = document.getElementById('rss-modalLink');

  modalTitle.textContent = articleTitle;
  modalBody.textContent = description;
  modalButton.addEventListener('click', () => window.open(link));
};
