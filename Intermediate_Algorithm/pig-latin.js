function translatePigLatin(str) {
  let startWithVowel = /^[aeiou].*/i;
  let withoutVowels = /[aeiou]/gi;
  let vowelIndex = /[aeiou]/gi;

  if (startWithVowel.test(str)){
    str += 'way';
    return str

  }
  if (str.match(withoutVowels) === null){
    str += 'ay';
    return str
  }
  
  if (str.search(vowelIndex) !== -1 && str.search(vowelIndex) !== 0){
    let consonant = str.search(vowelIndex);
    
    let newStr = str.substr(consonant)+str.substr(0,consonant)+'ay';
    console.log(newStr);
    return newStr;
  }
  
}
translatePigLatin("glove")
translatePigLatin("rhythm")
translatePigLatin("consonant");
