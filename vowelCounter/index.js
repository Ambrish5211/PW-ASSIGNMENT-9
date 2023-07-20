const vowel = (name) => {
  let count=0;
  for(i=0;i<name.length;i++)
  {
   if(name.charAt(i) === 'a' || name.charAt(i) === 'e' || name.charAt(i) === 'i' || name.charAt(i) === 'o' || name.charAt(i) === 'u' || name.charAt(i) === 'A' || name.charAt(i) === 'E' || name.charAt(i) === 'I' || name.charAt(i) === 'O' || name.charAt(i) === 'U' )
   {
      count++;
   }

  }
  return count;
}


const result=vowel('AMBRISH'); 
console.log(result); // Output :- 2

