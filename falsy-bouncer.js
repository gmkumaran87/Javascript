function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i< arr.length; i++){
    if (!!arr[i] == true){
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
  return newArray;
}

bouncer([7, "ate", "", false, 9]);