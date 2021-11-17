// $(document).ready(function () {
//     const fetchPost = (id) => {
//         return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then((result) => result.json())
//     };

//     fetchPost(2).then(onFetchSuccess).catch(onFetchError);

//     function onFetchSuccess() {
//         let json = fetchPost(2);
//         console.log(JSON.stringify());
//         for (let i = 0;i < json.lenght; i++) {
//             let userObject = json[i];
//             console.log(json[i]);
//         }
//     };
//     function onFetchError(error) {
//         console.log(error);
//     }

// });
$(document).ready(function () {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

    document.getElementById("name").innerHTML = response.name;
    document.getElementById("job").innerHTML = response.job;
});
