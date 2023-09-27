const fruits = {
    apple: 28,
    orange: 17,
    pearl: 54,
};

const keys = Object.keys(fruits);
console.log(keys);

const values = Object.values(fruits);
console.log(values);

const entries = Object.entries(fruits);
console.log(entries);

console.log('\nKEYS\n');

for (const key of keys) {
    console.log(key);
};

console.log('\n\nVALUES\n');

for (const value of value) {
    console.log(value);
};

console.log('\n\nENTRIES\n');

for (const [fruit, count] of entries) {
    console.log(`There are ${count} ${fruit}s`);
};

for (const entry of entries) {
    console.log(`${entry[0]}: ${entry[1]}`);
};
