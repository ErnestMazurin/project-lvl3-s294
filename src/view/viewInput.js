export default ({ isInputValid, inputValue }) => {
  const input = document.getElementById('rss-input');
  input.value = inputValue;
  if (isInputValid) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }
};
