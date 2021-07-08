let butn1 = document.getElementById('but1')
let butn2 = document.getElementById('but2')

async function getCat() {
    let promise = await fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data.message)
        document.getElementById("cat").src=data.message;
    })
}


async function getUser() {
    let promise = await fetch("https://random-data-api.com/api/users/random_user")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("user-id").innerText = `ID: ${data.id}`
        document.getElementById("first-name").innerText = `First Name: ${data.first_name}`
        document.getElementById("last-name").innerText = `Last Name: ${data.last_name}`
        document.getElementById("user-email").innerText = `Email: ${data.email}`
        document.getElementById("user-phone").innerText = `Phone: ${data.phone_number}`
    })
}

butn1.addEventListener('click', (e) => {
    getCat()
})

butn2.addEventListener('click', (e) => {
    getUser()
})
