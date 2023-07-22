
const colorMixer = (a, b) =>
{
  switch (true) {
    case a==='red' && b==='blue' || b==='red' && a==='blue' :
      console.log("purple");
      break;

      case a==='red' && b==='yellow' || b==='red' && a==='yellow' :
      console.log("orange");
      break;

      case a==='yellow' && b==='blue' || b==='yellow' && a==='blue' :
      console.log("green");
      break;
  
    default: console.log("Invalid Color Combination")
      break;
  } 
}

colorMixer('red', 'blue'); // purple
colorMixer('red', 'yellow'); // orange
colorMixer('blue', 'yellow'); // green