function truthCheck(collection, pre) {
  
  let newArray = collection.filter(obj => obj.hasOwnProperty(pre) && Boolean(obj[pre]));
  
  return newArray.length === collection.length;
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
