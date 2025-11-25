const _form = document.querySelector("form");
const _inputs = document.querySelectorAll("input,textarea");

_form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (const _input of _inputs) {
    if (!_input.validity.valid) {
      _input.focus();
      break;
    }
  }
});
