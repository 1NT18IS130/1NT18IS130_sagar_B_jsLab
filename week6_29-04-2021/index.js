var but1 = document.getElementById("butt1")

but1.addEventListener('click', (e) => {
    getCat()
})

async function getCat() {
    let promise = await fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        document.getElementById("cat").src=data[0].url;
    })
}