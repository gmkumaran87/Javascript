function spinalCase(str) {
  let arr = str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
  return arr;
var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
  console.log(arr)
  return arr;
}

spinalCase('This Is Spinal Tap');
