function convertHTML(str) {
  let htmlStr = {'&': '&amp;', '<': '&lt;', '>': '&gt;','"':'&quot;', "'": '&apos;'};
  let regexChar = /[\W]/g;
  
  
  if (str.match(regexChar) !== null){
    let specialChars = str.match(regexChar).filter(str=> str !== ' ');
  
  for (let s of specialChars){
 
    str = str.replace(s, htmlStr[s]);
  }
  }
  console.log(str);
  return str;
}
convertHTML("abc")
convertHTML("Schindler's List")
convertHTML("Dolce & Gabbana");
