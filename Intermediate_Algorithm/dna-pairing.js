function pairElement(str) {
  let dnaPair = {'A': 'T', 'T':'A', 'G':'C', 'C':'G'};
  let dnaArr = [];
  
  for (let w of str){
    let newStr = w+dnaPair[w]
    dnaArr.push(newStr.split(''));
  }
  console.log(dnaArr);
  return dnaArr;

//Option 2
  let arr = str.split('');

  let newArr = arr.map(x => [x,dnaPair[x]]);
  console.log(newArr)
}

pairElement("GCG");
