const invertedTriangle = (n) => {
  
  for(i=0;i<n;i++)
  {
    let asterisk='';
    for(j=0;j<(n-i);j++)
    {
      asterisk = asterisk + "*";
    }
    console.log(asterisk);
  }
    
}

invertedTriangle(8);