let row=5;
for(i=row;i>=1;i--){
    ptr="";
   for(j=1;j<=row-i;j++){
    ptr=ptr+" ";
   } 
   for(k=1;k<=i;k++){
    ptr=ptr+"*";
   }
   console.log(ptr);
} 