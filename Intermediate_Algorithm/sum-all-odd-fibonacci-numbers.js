function sumFibs(num) {
  let fib = function(num){
    let arr = [1, 1];
    for (let i = 2; i<= num; i++){
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr;
    }
  let fibArr = fib(num)
  .filter(n => n % 2 ===1 && n <= num)
  .reduce((a, b) => a+b);
  
  return fibArr;
}

sumFibs(10);
