function telephoneCheck(str) {

  let rawNum = str.match(/\d/g).join('');
  let newStr = str.replace(/\s/g, '');

    console.log(newStr);

  let bracketsExists = function() {
    return /\(|\)/g.test(str);
  };
  let checkBrackets = function(str, digit) {
    let flag = true;

    if (/\(/g.test(str)) {
      flag = /\)/g.test(str);
    }else{
      flag = false;
    }

  if (flag){
    if (str.match(/\(/g).length === str.match(/\)/g).length) {
      if (digit === 10) {
        if (str.substr(0, 1) === '\(' && str.substr(4, 1) === '\)') {
          return true;
        } else {
          return false;
        }
      } else if (digit === 11) {
        if (str.substr(1, 1) === '\(' && str.substr(5, 1) === '\)') {
          return true;
        } else {
          return false;
        }
      }

    } else {
      return false;
    }
  }else{
    return false;
  }
  };

  if(newStr.match(/[^\()-\d]/g) !== null){
    return false;
  }
  if (rawNum.length === 10) {
    if (bracketsExists()) {
      return checkBrackets(newStr, 10);
    } else {
      return true;
    }
  } else if (rawNum.length === 11 && parseInt(rawNum.substr(0, 1)) === 1) {
    if (bracketsExists()) {
      return checkBrackets(newStr, 11);
    }else{
      return true;
    }

  } else {
    return false;
  }

}

console.log(telephoneCheck("(555)5(55?)-5555"));
