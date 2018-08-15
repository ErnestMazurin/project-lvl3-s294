import $ from 'jquery/dist/jquery.min';

export default () => $('<div/>', { class: 'alert alert-danger', text: 'Something went wrong' });
