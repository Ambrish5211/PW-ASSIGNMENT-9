
const correctBug = (arr) => {

  for(i=0;i<arr.length;i++)
  {
    arr[i]=2*arr[i];
  }
  return arr;
}

let A = [2,4,6,8,10,12];
const result = correctBug(A);
console.log(result);