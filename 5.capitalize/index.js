 const capitalize = (Name) => {

  const firstLetter = Name.charAt(0);
  
  const updatedName =  firstLetter>='a' && firstLetter<='z' ? firstLetter.toUpperCase() + Name.slice(1) : Name ;
  return updatedName;
 }

 var result = capitalize('ambrish'); 
 console.log(result); //Ambrish
 result = capitalize('Ambrish');
 console.log(result); // Ambrish