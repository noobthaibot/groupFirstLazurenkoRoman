// $(document).ready(function () {
//     const fetchPokemonById = (id, onSuccess, onError) => {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//             .then((result) => result.json())
//             .then((pokemon) => {
//                 onSuccess(pokemon);
//             })
//             .catch((error) => {
//                 onError(error);
//             });
//     };

//     fetchPokemonById("pikachu", onFetchSuccess, onFetchError);

//     function onFetchSuccess(pokemon) {
//         console.log(pokemon);
//     }
//     function onFetchError(error) {
//         console.log(error);
//     }
// });

$(document).ready(function () {
    const fetchPost = (id) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((result) => result.json())
    };

    fetchPost(2).then(onFetchSuccess).catch(onFetchError);

    function onFetchSuccess() {
        let json = fetchPost(2);
        console.log(JSON.stringify());
        for (let i = 0;i < json.lenght; i++) {
            let userObject = json[i];
            console.log(json[i]);
            // let =  addUserViewToPage (userObject) 
            //         for (let i = 0; i < 10; i++) {
            //             $("body").append("<div></div>");
            //             $("body div").addClass("atributes");
            //             $('.atributes').text(userObject);
            //         }
            //     }
                console.log(userObject);
                return userObject;
            // }
        } 
    };
    function onFetchError(error) {
        console.log(error);
    }
    
});
// $(document).ready(function () {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => {
//         // console.log(response);
//         return response.json();
//     })
//     .then((json) => console.log(json));

    
// });
