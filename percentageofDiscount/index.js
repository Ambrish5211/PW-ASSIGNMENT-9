
const discountPercentage = (originalPrice, discountPrice) => {
  discount = ((originalPrice - discountPrice)/originalPrice)*100;
  return discount.toFixed(2);
}




const originalPrice = 100;
const discountPrice = 80;

console.log(discountPercentage(originalPrice, discountPrice)); // Output: 20.00
