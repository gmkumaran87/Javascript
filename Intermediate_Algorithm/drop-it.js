function dropElements(arr, func) {
  let times = arr.length;
   for (let i = 0; i<times; i++){
     console.log(i, arr);
     if(func(arr[0])){
       break;
     }else{
       arr.shift();
     }
   }
    return arr;
}
dropElements([1, 2, 3, 4], function(n) {return n > 5;})
//dropElements([1, 2, 3], function(n) {return n < 3; });
