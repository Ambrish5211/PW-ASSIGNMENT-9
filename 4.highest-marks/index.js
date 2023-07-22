 
const highestMarks = (A) => {
  var high = 0;
  for(i=0;i<A.length;i++)
  {
    A[i]>high ? high = A[i] : high = high;
  }
  
  return high;
}



 const A = [10,50,76,88,94,96];

 const highest = highestMarks(A);

 console.log(highest); // 96 is the output