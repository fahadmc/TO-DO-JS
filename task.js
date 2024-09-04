


const movies = [
    {
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: "Sci-Fi",
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.6,
        genre: "Sci-Fi",
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: "Action",
    },
    {
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        genre: "Crime",
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: "Drama",
    },
    {
        title: "Avengers: Endgame",
        year: 2019,
        rating: 8.4,
        genre: "Action",
    },
    {
        title: "The Room",
        year: 2003,
        rating: 3.7,
        genre: "Drama",
    },
];
//task1

// const rating = movies.filter((ele,indx,arr)=>{
//    return ele.rating > 9.0
// });
// console.log(rating);

//task2

// const titles = movies.map((ele,indx,arr)=>{
//     return ele.title
// });
// console.log(titles);

//task 4 

// const gettopratingmovies=(movies)=>{
//     const rating=movies.filter((ele)=>{
//         return ele.rating>9

//     });
//     const gettoptitlesmovies=rating.map((ele)=>{
//         return ele.title

//     })
//  return gettoptitlesmovies
// }
// console.log(gettopratingmovies(movies));



//task3  filter 

const getAverageRating = (movies, genre) => {
    const filterarr = movies.filter((ele, indx, arr) => {
        return ele.genre === genre
    });
    console.log(filterarr);
    const sum = filterarr.reduce((acc, ele) => {
        return acc + ele.rating;
    }, 0)
    // console.log(sum);
    return sum / filterarr.length;
};
 console.log(getAverageRating(movies, "Drama"));
    

//splic
// const arr=[1,2,3,4,5,6];

// const splicedarr= arr.splice(startingindx,deletecout,arg1,arg2, etc..)
// const splicedarr=arr.splice(1,4,)
// console.log(splicedarr);


//slice

// const arr=[1,2,3,4,5,6];

// // const slicedarr= arr.splice(startingindx,deletecout)
// const slicedarr=arr.slice(1)
// console.log(slicedarr);
