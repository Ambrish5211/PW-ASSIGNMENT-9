const para = document.querySelector('.paragraph');

const textArray = para.textContent.split(' ');



  
 
 const highlightedContent = textArray.map(word => {
  return (word.length > 8) ? `<span class="highlight">${word}</span>` : word;
}).join(' ');
  
para.innerHTML = highlightedContent;
