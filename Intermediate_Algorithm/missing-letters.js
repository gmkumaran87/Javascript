function fearNotLetter(str) {
  let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
  
  let startChar = alphabet.indexOf(str[0]);
  let endChar = alphabet.indexOf(str[str.length-1]);
  let arr = alphabet.slice(startChar, endChar+1);
  let count = 0;

  for (let w of arr){
    if (w !== str[count]){
      return w;
    }
    count++;
  }
  
  return undefined;
}

fearNotLetter("abce");
