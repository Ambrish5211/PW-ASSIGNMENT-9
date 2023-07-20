
const divisibility = (arr) =>
{
  for(let i=0 ; i<arr.length; i++)
  {
    if(arr[i]%3 === 0 && arr[i]%2 !== 0)
    {
      console.log(arr[i]);
    }
    else
    continue;
  }
}

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,15];

divisibility(A); // Output: 3,9,15