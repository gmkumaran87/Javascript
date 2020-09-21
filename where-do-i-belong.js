function getIndexToIns(arr, num) {
  arr.sort((a, b)=>a-b);
  for (var i = 0; i < arr.length; i++){
    if (num <= arr[i]){
      return i;
    }
  }
  console.log(arr.length);
  return arr.length;
}

getIndexToIns([40, 60], 50);
