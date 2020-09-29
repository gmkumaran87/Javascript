function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  let newArr = arr.map(obj => {
    let rObj = {};
    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius+obj.avgAlt, 3)/ GM))
   rObj['name'] = obj.name;
   rObj['orbitalPeriod'] = orbitalPeriod;
   return rObj;
  });
  
  console.log(newArr);
  return newArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])