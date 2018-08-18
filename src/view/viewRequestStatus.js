import renderAlert from '../render/renderAlert';

const blockSubmitBtn = () => {
  const btn = document.getElementById('rss-submit');
  btn.setAttribute('disabled', '');
};

const unblockSubmitBtn = () => {
  const btn = document.getElementById('rss-submit');
  btn.removeAttribute('disabled');
};

export default ({ requestStatus }) => {
  const alertRoot = document.getElementById('rss-alert');

  switch (requestStatus) {
    case 'success': {
      alertRoot.innerHTML = '';
      const alert = renderAlert('success', 'Channel was successfully added!');
      alertRoot.appendChild(alert);
      unblockSubmitBtn();
      break;
    }
    case 'processing': {
      alertRoot.innerHTML = '';
      const alert = renderAlert('info', 'Downloading ...');
      alertRoot.appendChild(alert);
      blockSubmitBtn();
      break;
    }
    case 'failure': {
      alertRoot.innerHTML = '';
      const alert = renderAlert('danger', 'Something went wrong');
      alertRoot.appendChild(alert);
      unblockSubmitBtn();
      break;
    }
    default:
      throw new Error(`Unknown request status: ${requestStatus}`);
  }
};
