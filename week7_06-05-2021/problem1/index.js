var but1 = document.getElementById("butt1")

but1.addEventListener('click', (e) => {
    let n = Math.floor(Math.random() * 5).toString() + ".jpg"
    console.log(n)
    document.getElementById("cat").src=n
})
 //


// async function getCat() {
//     let promise = await fetch("https://api.thecatapi.com/v1/images/search")
//     .then(response => response.json())
//     .then(data => {
//         data[0].url;
//     })
// }