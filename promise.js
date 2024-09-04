const mypromise = new Promise((res, rej) => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
        if (response.status === 200) {
            const data = response.json();
            res(data);

        } else {
            rej("something went wrong");
        }
    });
});
mypromise
    .then((res) => {
        console.log(res);

    })
    .catch((err) => console.log(err));
