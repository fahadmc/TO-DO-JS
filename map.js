const map = new Map()

map.set("name","amal");
map.set(0,2)
// console.log(map);
console.log(map.get("name"));
for(let [key,value]of map){

console.log(key,value);

}
