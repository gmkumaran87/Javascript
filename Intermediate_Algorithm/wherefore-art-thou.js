function whatIsInAName(collection, source) {
  var arr = [];
  var srcKeys = Object.keys(source);
  
  // Only change code below this line
  arr = collection.filter(function(obj){
   
  for (let prop of srcKeys){
    console.log(prop, source[prop]);
      if (obj.hasOwnProperty(prop) !== true || obj[prop] !== source[prop]){
        return false;
      }
  }
  return true;
  });
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
