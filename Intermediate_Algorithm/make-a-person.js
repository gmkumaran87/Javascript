var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  var fullName = firstAndLast;
  

  this.getFullName = ()=> fullName;

  this.getFirstName = ()=>{
    return fullName.split(' ')[0];
  }

  this.getLastName = () => fullName.split(' ')[1];

  this.setFirstName = function(name){
    fullName = name+' '+fullName.split(' ')[1];
    console.log(fullName);
  }
  this.setLastName = function(name){
    fullName = fullName.split(' ')[0]+' '+name;
    console.log(fullName);
  }

  this.setFullName = function(name){
    fullName = name;
    console.log(fullName);
  }
  
};

var bob = new Person('Bob Ross');

bob.getFirstName();
bob.setFirstName("Haskell");
bob.setLastName("Curry");
bob.setFullName("Haskell Curry");
console.log(bob.getFullName());
