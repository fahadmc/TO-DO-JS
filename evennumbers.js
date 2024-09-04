// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < 5; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//         console.log("number");

//     }
//     console.log(i);

// }

//even number//

function evenarray(arr) {
    let len=arr.length;
    for (let i = 0; i < len;i++)
        if(arr[i]%2===0){
            console.log(arr[i]);
            
        }
}
let arr=[1,2,3,4,5,6,7,8,9,10]
evenarray(arr);

