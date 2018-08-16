import renderAlert from '../render/renderAlert';

export default ({ isRequestFailure }) => {
  const root = document.getElementById('rss-alert');
  root.innerHtml = '';

  if (isRequestFailure) {
    const alert = renderAlert();
    root.appendChild(alert);
  }
};
