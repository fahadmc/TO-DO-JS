function greet(para){
    console.log(this,para);
}
const student={
    name:"fahad",
    age:23,

}
// greet.call (student,"hello");
// greet.apply ([student,"hello"]);


