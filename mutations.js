function mutation(arr) {
  let newArr = arr[0].toLowerCase();
  console.log(newArr);
  for (let s of arr[1]){
    
    if (!newArr.includes(s.toLowerCase())){
      return false;
    }

  }
  return true;
}

mutation(["hello", "hey"]);
