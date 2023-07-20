
const billSplitter = (bill, noOfPerson) => {

  const totalBill = Object.values(bill).reduce( (prev, current) => {return prev + current},0)
  const contribution = totalBill/noOfPerson;

  const billInfo = {
    "Total Bill" : totalBill,
    "Contribution per person" : contribution
  };

  return billInfo;
}

let bill = {
  dish1 : 500,
  dish2 : 200,
  dish3 : 100,
  dish4 : 200
};

let noOfPerson = 4;

const result = billSplitter(bill, noOfPerson);
console.log(result);