import $ from 'jquery';

import renderAlert from '../render/renderAlert';

export default ({ isRequestFailure }) => {
  const root = $('#rss-alert');
  root.empty();

  if (isRequestFailure) {
    renderAlert().appendTo(root);
  }
};
