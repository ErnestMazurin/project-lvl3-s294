import $ from 'jquery/dist/jquery.min';

import alertRenderer from '../renderers/alertRenrerer';

export default ({ isProblem }) => {
  const root = $('[data-element="rss-alert"]');
  root.empty();

  if (isProblem) {
    alertRenderer().appendTo(root);
  }
};
