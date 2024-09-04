var size =5;

for (let i = 1; i <=size; i++) {
  let ptrn= '';

  for (let j = 1; j <= size; j++) {
    if (i === 1 ||  j === size-i+1|| i===size) {
      ptrn+= '*';
    } else {
      ptrn+= ' ';
    }
  }

  console.log(ptrn);
}

