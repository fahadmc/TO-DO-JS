// var element=document.getElementById("container");
// console.log(element);
// element.style.color="red";
// element.style.backgroundColor="green";
// var element2=document.createElement("p");
// console.log(element2)
// // document.body.append(element2)
// var element3=document.createElement("h1");
// console.log(element3);
// document.body.append(element3,element2);


// var ele1=document.createElement("div");
// document.body.append(ele1);
// var ele2=document.createElement("h1");
// document.ele1.append("ele2")

const newelement = $("<p>");
newelement.text("new element written");
$("#container").css({
    color: "yellow",
    backgroundColor: "green",
    height: "200px",
    width: "200px"
})
$("#btn").click(() =>{
    alert('click')
    $("#container").append(newelement)
})
