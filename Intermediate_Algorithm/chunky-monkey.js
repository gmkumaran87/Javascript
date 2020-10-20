function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let i = 0;
  let j = size;
  while (i <= arr.length-1){
    newArr.push(arr.slice(i, j))
    i +=size;
    j +=size;
    console.log( newArr);
  }
  
  return newArr;

}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
