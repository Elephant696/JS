document.addEventListener('DOMContentLoaded', function() {
    let countDisplay = document.querySelector('.js-count-display');
    let incrementButton = document.querySelector('.js-increment-button');

    function incrementCount() {
        let currentCount = parseInt(countDisplay.textContent);
        countDisplay.textContent = currentCount + 1;
    }

    incrementButton.addEventListener('click', incrementCount);
})