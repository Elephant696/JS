// Синтаксис стрелочной функции: (аргументы) => { тело функции }
const arrowFn = (name, surname) => {
    console.log(name + ' ' + surname);
};
arrowFn('Иван', 'Иванов');

// Если у функции единственный аргумент, то можно опустить скобки
const arrowFn = name => {
    console.log(name);
};

// Для функций без аргументов указываются пустые скобки
const arrowFn = () => {
    console.log('Иван');
};

// А если опустить фигурные скобки, то функция вернёт результат выражения
const arrowFn = (name, surname) => `Привет, ${name} ${surname}`;
console.log(arrowFn('Иван', 'Иванов'));

// То же самое с фигурными скобками для наглядности
const arrowFn = (name, surname) => {
    return `Привет, ${name}, ${surname}`;
};
console.log(arrowFn('Иван', 'Иванов'));