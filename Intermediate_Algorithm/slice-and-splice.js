function frankenSplice(arr1, arr2, n) {
  let newArray = [];
  newArray = arr2.slice();
  newArray.splice(n, 0, ...arr1);
  /*for( let i = 0; i < arr2.length; i++){
    if (i == n){
      for (let j = 0; j < arr1.length; j++){
        newArray.push(arr1[j]);
      }
      newArray.push(arr2[i]);
    }
    else{
      newArray.push(arr2[i]);
    }
  }*/
  console.log(newArray);
  return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
