const car={
    name:'BMW',
    color:'black',
    region:'india',
    details:{
        age:20,
        mfg:2000
    }
}
bus={...car}
bus.color='blue';
bus.details.age='25'
console.log(car,bus);
