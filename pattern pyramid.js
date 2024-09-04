let row=5;
for(i=1;i<=5;i++){
    ptr=" ";
   for(j=1;j<=5-i;j++){
   ptr=ptr+" ";
   }
   for(k=1;k<=i;k++)
   ptr=ptr+" *"
console.log(ptr);
   
}

// let row=5;
// for(i=5;i>=1;i--){
//     ptr=" ";
//    for(j=1;j<=5-i;j++){
//    ptr=ptr+" ";
//    }
//    for(k=1;k<=i;k++)
//    ptr=ptr+"* ";
// console.log(ptr);
   
// }