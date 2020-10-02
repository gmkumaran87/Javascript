function convertToRoman(num) {
  let numStr = ''+num
  let numDigit = numStr.length -1;
  let romArr = [];
  let romanNum = {1: 'I', 2:'II', 3:'III', 4:'IV', 5: 'V', 6:'VI',7:'VII', 8:'VIII', 9: 'IX' ,10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M', 5000: 'N'};
  
  for (let s of numStr){
    let numS = parseInt(s);
    if (numS === 0){
      numDigit--;
      continue;
    }
    let v = Math.pow(10, numDigit);

    if (numS === 9){
        romArr.push(romanNum[v]+romanNum[v*10]);
    }else if (numS > 5 && numS < 9){
      romArr.push(romanNum[5*v]+romanNum[1*v].repeat(numS-5));
    }else if (numS === 5){
      romArr.push(romanNum[v*5]);
    } else if (numS === 4){
        romArr.push(romanNum[v*(5-numS)]+romanNum[5*v]);
    }else if (numS < 4){
      romArr.push(romanNum[v].repeat(s));
    }
    numDigit--;
  }
  console.log(romArr);
 return romArr.join('');
}

convertToRoman(1006);
