import renderAlert from '../render/renderAlert';

export default ({ requestStatus }) => {
  const alertRoot = document.getElementById('rss-alert');

  switch (requestStatus) {
    case 'success': {
      alertRoot.innerHTML = '';
      const alert = renderAlert('success', 'Channel was successfully added!');
      alertRoot.appendChild(alert);
      break;
    }
    case 'processing': {
      alertRoot.innerHTML = '';
      const alert = renderAlert('info', 'Downloading ...');
      alertRoot.appendChild(alert);
      break;
    }
    case 'failure': {
      alertRoot.innerHTML = '';
      const alert = renderAlert('danger', 'Something went wrong');
      alertRoot.appendChild(alert);
      break;
    }
    default:
      break;
  }
};
