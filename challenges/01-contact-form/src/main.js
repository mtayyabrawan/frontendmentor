const _form = document.querySelector("form");
const _formBtn = document.querySelector("button");
const _inputs = document.querySelectorAll("input");
const _textarea = document.querySelector("textarea");
const _success = document.querySelector("#success");

function cleaner(evt) {
  const _target = evt.currentTarget;
  let value = _target.value.trimStart();
  _target.value = value
    .replace(/[\n]+/g, "\n")
    .replace(/([^\n^\w][\s])+/g, " ");
}

for (const _input of [..._inputs, _textarea]) {
  _input.addEventListener("input", cleaner);
}

_textarea.addEventListener("keypress", (evt) => {
  if (evt.key === "Enter" && !evt.shiftKey && !evt.altKey && !evt.ctrlKey) {
    _formBtn.click();
  }
});

_form.addEventListener("submit", (event) => {
  _formBtn.disabled = true;
  event.preventDefault();
  const _target = event.currentTarget;
  let validForm = true;
  for (const _input of [..._inputs, _textarea]) {
    if (!_input.validity.valid) {
      _input.focus();
      validForm = false;
      break;
    }
  }
  if (!validForm) {
    _formBtn.disabled = false;
    return;
  }
  _form.reset();
  const fd = new FormData(_target);
  const formData = {};
  fd.forEach((val, key) => {
    formData[key] = val.trim();
  });
  // Do some api stuff here
  _formBtn.disabled = false;
  _success.classList.add("animate");
});

_success.addEventListener("animationend", (evt) => {
  evt.currentTarget.classList.remove("animate");
});
