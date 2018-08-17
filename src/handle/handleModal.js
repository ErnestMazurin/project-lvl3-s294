export default (articleTitle, link, description) => () => {
  const modalTitle = document.getElementById('rss-modalLabel');
  const modalBody = document.getElementById('rss-modalBody');
  const modalLink = document.getElementById('rss-modalLink');

  modalTitle.textContent = articleTitle;
  modalBody.textContent = description;
  modalLink.href = link;
};
