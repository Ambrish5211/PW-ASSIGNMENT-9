const colors = ["red", "blue", "green", "yellow", "orange", "gray", "aqua", "black", "maroon",  "pink"]

const changeColor = () => {
 const index =Math.floor(Math.random()*10);
 console.log(index)
document.body.style.backgroundColor = colors[index];
}