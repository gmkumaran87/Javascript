function uniteUnique(...arr) {
  // Loading the initial array
  let newArr = [...arr[0]];
  console.log(arr.length);
  for (let i = 1; i < arr.length; i++){
    let subArray = arr[i].filter( (num) => newArr.indexOf(num) === -1
    );
    newArr.push(...subArray)
  }
  console.log(newArr);

  return newArr;
  
  //Option 2
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


