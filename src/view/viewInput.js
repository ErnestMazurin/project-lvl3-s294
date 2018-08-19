export default ({ value, isValid }) => {
  const inputElement = document.getElementById('rss-input');
  inputElement.value = value;
  if (isValid) {
    inputElement.classList.remove('is-invalid');
    inputElement.classList.add('is-valid');
  } else {
    inputElement.classList.remove('is-valid');
    inputElement.classList.add('is-invalid');
  }
};
