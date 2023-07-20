const calculate = (a, b, c) => {
  let result;
  switch (c) {
    case "+":
      result = a + b;
      console.log(result);
      break;
    case "-":
      result = a - b;
      console.log(result);
      break;
    case "*":
      result = a * b;
      console.log(result);
      break;
    case "/":
      result = a / b;
      console.log(result);
      break;

    default:
      console.log("Invalid operator");
      break;
  }
};

calculate(10 , 20 , '+');  // Result = 30
calculate(10 , 20 , '-');  // Result = -10
calculate(10 , 20 , '*');  // Result = 200
calculate(10 , 20 , '/');  // Result = 0.5
