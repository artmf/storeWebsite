var phonedY = document.querySelector(`#phonedY`);
var phonedN = document.querySelector(`#phonedN`);
var error = document.querySelector(`#error`);
var form = document.querySelector(`#form`);

form.onsubmit = function() {
    if (phonedY.checked) {
        return true;
    } else if (phonedN.checked) {
        return true;
    }

    error.innerHTML = `Checkbox Required`;
    error.classList.replace(`hidden`, `error`);
    return false;
};
