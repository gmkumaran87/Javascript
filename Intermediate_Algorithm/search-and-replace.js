function myReplace(str, before, after) {

  let capitalize = (word) => word.charAt(0).toUpperCase()+word.substr(1);
  let isCapitalize = (word) =>word[0] === word[0].toUpperCase();
  
  // If the before is First character Uppercase
  if(isCapitalize(before)){
    return str.replace(before, capitalize(after));
  }else {
    return str.replace(before, after.toLowerCase());
  }
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
