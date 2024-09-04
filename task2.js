const list = [1, 2, 3, 4, 5, 1, 2, 4, 5, 3, 4, 2, 4, 1, 3];
const duplicates = list.filter((ele, idx) => {
    return list.indexOf(ele) === idx;
});
console.log(duplicates);


