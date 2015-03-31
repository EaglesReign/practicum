//changed eggs to have 102.
var stock = "1 lemon, 2 cabbages, and 102 eggs";
function minusOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  //added this portion so that if amount exceeds 100, you have zillions.
  else if (amount > 100)
    amount = "zillions of";
  return amount + " " + unit;
}
print(stock.replace(/(\d+) (\w+)/g, minusOne));
