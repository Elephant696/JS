// для простоты примера представим, что в пистолете 5 патронов
// вероятность выстрела - 20%
do {
    console.log('Нажимаем на курок');
} while (Math.random() > 0.2);

console.log('Похоже, вам не повезло');