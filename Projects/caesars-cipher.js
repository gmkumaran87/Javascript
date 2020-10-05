function rot13(str) {
  let alphabets = [...Array(26).keys()].map(a => String.fromCharCode(a + 97).toUpperCase());
  let newWord = [];

  for (let w of str) {
    let index = alphabets.indexOf(w);
    let newInd = 0;

    if (/\w/.test(w)) {
      if ((index + 13) > 25) {
        newInd = 25 - index
        newWord.push(alphabets[13 - newInd - 1]);
      } else {
        newWord.push(alphabets[index + 13]);
      }
    } else {
      newWord.push(w);
    }
  }
  console.log(newWord.join(''));

  return newWord.join('');
}
rot13("SERR YBIR?");
rot13("SERR PBQR PNZC");
