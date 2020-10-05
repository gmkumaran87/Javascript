let currency = {
  'ONE HUNDRED': {
    value: 100,
    count: 0,
    given: 0
  },
  'TWENTY': {
    value: 20,
    count: 0,
    given: 0
  },
  'TEN': {
    value: 10,
    count: 0,
    given: 0
  },
  'FIVE': {
    value: 5,
    count: 0,
    given: 0
  },
  'ONE': {
    value: 1,
    count: 0,
    given: 0
  },
  'QUARTER': {
    value: 0.25,
    count: 0,
    given: 0
  },
  'DIME': {
    value: 0.1,
    count: 0,
    given: 0
  },
  'NICKEL': {
    value: 0.05,
    count: 0,
    given: 0
  },
  'PENNY': {
    value: .01,
    count: 0,
    given: 0
  }
};

Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places) + "e-" + places);
};

function calculateCount(cid) {
  cid.forEach(bill => {
    currency[bill[0]].count = (bill[1] / currency[bill[0]].value).round(2);
  });
}

function checkCashRegister(price, cash, cid) {
  let output = {
    status: 'OPEN',
    change: []
  };
  calculateCount(cid);

  var total = cid.map(function(arr) {
      return arr[1];
    })
    .reduce((a, b) => a + b).round(4);


  var change = cash - price;

  // Looping through the WHILE loop until the change variable = 0
  console.log(`Total value ${total}`);

  for (let s in currency) {
    while (change !== 0 && change >= currency[s].value && currency[s].count > 0) {
      if (change >= currency[s].value && currency[s].count > 0) {
        change = (change - currency[s].value).round(4);
        currency[s].count--;
        currency[s].given++;
      }

    }
  }

  for (let s in currency) {
    if (currency[s].given > 0) {
      var totalgiven = (currency[s].value * currency[s].given).round(4);
      total -= totalgiven;
      output.change.push([s, totalgiven]);
    }
  }

  if (change !== 0) {
    output.status = "INSUFFICIENT_FUNDS";
    output.change = [];
  } else if (change === 0 && total === 0) {
    output.status = "CLOSED";
    output.change = cid;
  }
  /*console.log(`After the change given ${total}`);
  console.log(currency);*/
  console.log(output);
  return output;
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
