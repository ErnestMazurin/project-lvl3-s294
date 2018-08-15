// @flow

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import $ from 'jquery/dist/jquery.min';

export default el => $('<li/>', { class: 'list-group-item', text: el });
