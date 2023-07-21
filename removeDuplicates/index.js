const removeDuplicates = (oldCart) => {
  const newCart = new Set(oldCart);

  return Array.from(newCart);
};

const products = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item1",
  "item4",
  "item2",
];

const cart = removeDuplicates(products);

console.log(cart);
