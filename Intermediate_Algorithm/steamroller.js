function steamrollArray(arr) {
  let flattenArr = [];

  let flatArray = function(args){
    if (!Array.isArray(args)){
      flattenArr.push(args);
    }else{
      for (let s of args){
        flatArray(s);
      }
     }
  };

  for (let i = 0; i < arr.length; i++){
    flatArray(arr[i]);
  }
  
  console.log(flattenArr);
  return flattenArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
