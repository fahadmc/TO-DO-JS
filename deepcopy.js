const car={
    name:'BMW',
    color:'black',
    region:'india',
    details:{
        age:20,
        mfg:2000
    }
    
}
const lori=JSON.parse(JSON.stringify(car));
lori.name='benz';
lori.color='green';
lori.details.aage=15;
console.log(lori,car);
