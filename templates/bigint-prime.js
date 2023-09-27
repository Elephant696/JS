// Возвращает true, если BigInt — простое число
function isPrime(p) {
    for (let i = 2n; i * i <= p; i++) {
      if (p % i === 0n) return false;
    }
    return true;
  }
  
  // Берет BigInt в качестве аргумента и возвращает BigInt
  function nthPrime(nth) {
    let maybePrime = 2n;
    let prime = 0n;
  
    while (nth >= 0n) {
      if (isPrime(maybePrime)) {
        nth--;
        prime = maybePrime;
      }
      maybePrime++;
    }
  
    return prime;
  }
  
  nthPrime(20n);
  // ↪ 73n