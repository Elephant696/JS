// Function Declaration/Expression

// 1. Методы объектов
const obj = {
    name: 'Name',
    printName() {
        console.log(this.name);
    }
};

// 2. Обработчики событий, когда нужен this
input.addEvantListener('input', function() {
    console.log(this.value);
});

// 3. Простые именованные функции
function makeMeSanwich() {
    // 
};

// Arrow Function

// 1. Обработчики событий
input.addEvantListener('input', () => {
    console.log('Input event');
});

// 2. При передачи анонимной функции в качестве параметра другой функции
setInterval(() => {
    console.log('tick');
}, 1000);

// 3. IIFE
(() => {})() // vs (function() {})()