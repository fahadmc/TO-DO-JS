const container = document.getElementById("container");

const button = document.getElementById("btn");

const myRequest = new XMLHttpRequest();

button.addEventListener("click",() => {
    myRequest.open("GET", "https://jsonplaceholder.typicode.com/users");
myRequest.onload=() => {
    const data = JSON.parse(myRequest.response);
    console.log(data);
    let result ="";
    data.map((data) => {
        result = result + `<div>${data.name}</div>`;
    });
    console.log(result);
    container.innerHTML = result;
};
myRequest.send();
});
