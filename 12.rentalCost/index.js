
const rentalCost = (car, days) =>
{
 if(car === 'Economy')
 return days*4000;
 else if(car === 'Midsize')
 return days*10000;
 else if(car === 'Luxury')
 return days*20000;
}

console.log(rentalCost('Economy',5)); // Output:  20000
console.log(rentalCost('Midsize',5)); // Output:  50000
console.log(rentalCost('Luxury',5)); // Output:  100000
