function sumAll(arr) {
  const newArray = [];
  arr.sort(function(a, b){
    return a===b ? 0: a > b ? 1: -1;
  })

  for (let i = arr[0]; i <= arr[1]; i++){
    newArray.push(i);
  }
  return newArray.reduce((a,b)=> a+b);
  
  // Option 2
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  let sumVal = 0;
  for (let j = minVal; j <= maxVal; j++){
    sumVal += j;
  }
  console.log(sumVal);
  return sumVal;
}

sumAll([1, 4]);
