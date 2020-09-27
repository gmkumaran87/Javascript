function sumPrimes(num) {
  // Creating Array of numbers from 2..n, since 1 is not Prime number and we omit.
  let newArr = [...Array(num+1).keys()].filter(n => n > 1);
  let primeNum = newArr.filter(n =>{
    for (let i = 2; i <= n/2 ; i++){
    if (n % i === 0 ){
      return false;
    }
  }
  return true;
  })
  .filter(newNum => newNum <= num)
  .reduce((a,b) => a+b);

  console.log(primeNum);
  return primeNum;
}

sumPrimes(977);
