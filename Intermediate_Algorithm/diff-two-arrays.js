function diffArray(arr1, arr2) {
  var newArr = [];
  let Arr = [];

  let dif = arr1.filter(function(item){
    return (arr2.includes(item) == false);
  })
  let dif2 = arr2.filter(function(item){
    return (arr1.includes(item) == false);
  })
  Arr = [...dif, ...dif2]
  
  console.log(Arr);
  for (let item of arr1){
    if (arr2.includes(item)){
      continue;
    }else{
      newArr.push(item);
    }
  }
  for (let item of arr2){
    if (arr1.includes(item)){
      continue;
    }else{
      newArr.push(item);
    }
  }
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
