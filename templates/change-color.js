document.addEventListener('DOMContentLoaded', function() {
    let colorInput = document.querySelector('.js-color-input');
    let colorBlock = document.querySelector('.js-color-block');
    let clearButton = document.querySelector('.js-clear-color-button');

    function paintBlock() {
        colorBlock.style.backgroundColor = colorInput.value;
    }

    colorInput.addEventListener('click', paintBlock);

    paintBlock();

    clearButton.addEventListener('click', function() {
        colorBlock.style.removeProperty('background-color');
        colorInput.value = '';
    });
});