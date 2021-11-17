$(document).ready(function () {
    async function getResponse() {
        let response  = await fetch('https://jsonplaceholder.typicode.com/photos');
        let content = await response.json();
        content = content.splice(0, 10);

        let list = document.querySelector('.main-div');

        let key;
        for (key in content) {
            list.innerHTML += `
            <div class="item">
                <h3>${content[key].title}</h3>
                <img src="${content[key].url}" width = "300px">
                <a href="${content[key].thumbnailUrl}">Ссылка на картинку</a>
                <div class="button-wrap">
                    <button type="button" class="button1" id="first-button" value=>ALERT</button>
                    <button type="button" class="button2" id="second-button">DELETE</button>
                </div>    
            </div>`
        };
        console.log(content[key]);
        $('.button1').on({
            click: function() {
                alert("Размер этой картинки - 300px")
            }
        })
        $('.button2').on({
            click: function() {
                $(this).parent().parent().remove();
            }
        })
    }
    getResponse();
 });
