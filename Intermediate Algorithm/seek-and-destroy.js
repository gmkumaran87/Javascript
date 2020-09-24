function destroyer(arr, ...args) {
  let newArr = arr.filter(function(item){
    return (args.includes(item) === false);
  });
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
