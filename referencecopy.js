const car={
    name:'BMW',
    color:'black',
    region:'india',
    details:{
        age:20,
        mfg:2000
    }
}
const bus = car
bus.color='blue'
bus .details .age=10
console.log(bus);
console.log(car);


