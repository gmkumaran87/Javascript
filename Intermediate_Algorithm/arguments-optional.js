function addTogether() {
  
  let checkNum = function(n){
    if (typeof n !== 'number'){
      return undefined;
    }else{
      return n;
    }
  }

  if (arguments.length > 1){
    let a = checkNum(arguments[0]);
    let b = checkNum(arguments[1]);
    console.log(a,b);
    if (a === undefined || b === undefined){
      return undefined;
    }else{
      return a + b;
    }
    
  }else{
    let c = checkNum(arguments[0])
    if (c !== undefined){
      return function(y){
        if (checkNum(y) === undefined){
          return undefined;
        }else{
          return y + c;
        }
      }
    }
    
  }
}

addTogether(2, 3);
