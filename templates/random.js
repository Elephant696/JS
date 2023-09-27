function generateRandomNumber(n, m) {
    let range = Math.abs(m - n);
    let numberInRange = Math.round(Math.random() * range);
    let min = Math.min(n, m);
    return min + numberInRange;
}