
const toFahrenheit = (temp) =>
{
   const inFahrenheit = (temp * 1.8) + 32;
   return inFahrenheit;
}

const result = toFahrenheit(37);
console.log(result); // Output : 98.6
