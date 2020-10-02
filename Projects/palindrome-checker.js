function palindrome(str) {
  let rawString = str.toLowerCase().replace(/[_]/,'').match(/\w/g);
  let reverseStr = rawString.map(str => str).reverse().join('');

 return rawString.join('') === reverseStr; 
}



palindrome("eye");
