var size=10;
for(let i=0; i<size; i++){
    let ptrn= '';
    for(let j=0; j<size; j++){
        if(i===j || i+j === size-1){
            ptrn+='*';

        }else{
            ptrn+=' ';
        }
    }
    console.log(ptrn);
    
}