function smallestCommons(arr) {
  let newArr = [];
  arr.sort((a, b)=> {
    return 0? a===b: 1? a-b: -1;
  })
  let cnt = arr[1]*2;
  for (let i = arr[0]; i <= arr[arr.length-1]; i++){
    newArr.push(i);
  }
 
  while( true){
    var divisor = true;
    for (let i = 0; i < newArr.length; i++){
      if (cnt % newArr[i] === 0){
        divisor = true;
      }else{
        divisor = false;
        break;
      }  
    }
    if (divisor === true){
      break;
    }
    cnt++;
  }
   
  console.log(cnt);
  return cnt;
}


smallestCommons([23,18]);
