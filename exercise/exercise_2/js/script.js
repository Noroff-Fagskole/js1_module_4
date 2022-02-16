// const randomUserUrl = "https://randomuser.me/api/";
// const wrapperDvi = document.querySelector(".wrapper");
//
// fetch(randomUserUrl)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonData) {
//
//         // const myInfo = jsonData.results;
//         for (let i = 0; i < myInfo.length; i++) {
//
//             const firstName = myInfo[i].name.first;
//             const lastName = myInfo[i].name.last;
//             const image = myInfo[i].picture.large;
//
//             wrapperDvi.innerHTML = `<h1>${firstName}</h1>`
//         }
//     })
//     .catch(function (error) {
//         console.log(error);
//     })


const randomUserUrl = "https://randomuser.me/api/";
const wrapperDvi = document.querySelector(".wrapper");
fetch(randomUserUrl)
    .then(function (response) {
        return response.json()
    })
    .then(function (jsonData) {
        const info = jsonData.results;
        for (let i = 0; i < jsonData.length; i++) {
            const firstName = jsonData[i].name.first;
            const lastName = jsonData[i].name.last;
            wrapperDvi.innerHTML = `<h2>Name: ${firstName}</h2>
<h3>Last Name: ${lastName}</h3>

 `
        }
    })
    .catch(function (error) {
        console.log(error)
    })



