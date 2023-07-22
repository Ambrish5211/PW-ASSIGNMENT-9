
const finalPrice = (items) => {
  let sum=0;
  items.map((value) => {
    sum = sum + value.unitPrice*value.quantity;
  })
  console.log(sum);
}



const items = [
  product1 = {unitPrice : 100, quantity: 2 },
  product2 = {unitPrice : 150, quantity: 2 },
  product3 = {unitPrice : 300, quantity: 4 },
];

finalPrice(items); // Output: 1700