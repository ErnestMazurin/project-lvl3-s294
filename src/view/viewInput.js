import $ from 'jquery';

export default ({ isInputValid, inputValue }) => {
  const input = $('#rss-input');
  input.val(inputValue);
  if (isInputValid) {
    input.removeClass('is-invalid');
    input.addClass('is-valid');
  } else {
    input.removeClass('is-valid');
    input.addClass('is-invalid');
  }
};
