var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];
  let fullName = firstName +' '+lastName;
  console.log(firstName, lastName, fullName);

  this.getFullName = () => firstAndLast;

  this.getFirstName = () =>this.firstName;

  this.getLastName = ()=>  this.LastName;

  this.setFirstName = function(name){
    firstName = name;
    
  }
  this.setLastName = function(name){
    lastName = name;
  }

  this.setFullName = function(firstLast){
    fullName = firstLast;
  }
  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.getFirstName();
bob.setFirstName("Haskell");
