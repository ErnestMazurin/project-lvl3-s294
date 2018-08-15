import $ from 'jquery/dist/jquery.min';

export default (state) => {
  const { isInputValid, inputValue } = state;
  const input = $('[data-element="rss-input"]');
  input.val(inputValue);
  if (isInputValid) {
    input.removeClass('is-invalid');
    input.addClass('is-valid');
  } else {
    input.removeClass('is-valid');
    input.addClass('is-invalid');
  }
};
