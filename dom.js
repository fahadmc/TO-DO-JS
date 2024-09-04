
const element = document.getElementsByClassName("container");
const button = document.getElementById("btn");
// console.log(button);
// console.log(element);
button.style.backgroundColor='green'
button.style.color='white'
button.style.borderRadius='50px'
button.style.height='30px'
button.style.width='100px'
const newelement = document.createElement("h1");
newelement.style.color='red'
newelement.textContent = 'this is new element'
button.textContent = "change color";
button.addEventListener('click',(ele)=> {
    element[0].append(newelement)
});

