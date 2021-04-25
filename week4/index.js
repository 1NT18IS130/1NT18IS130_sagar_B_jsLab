let divs = document.querySelectorAll("div");

divs.forEach(div => { 
    if(div.id != "parent") {
        console.log("innerdivs");
        let div_id = document.getElementById(div.id)
        div.addEventListener('mouseover', (e) => {
            if(div_id.style.visibility == "hidden") {
                console.log("You can move ahead")
            }
        })
    }
})

divs.forEach(div => { 
    if(div.id != "parent") {
        let div_id = document.getElementById(div.id)
        div.addEventListener('click', (e) => {
            if(div_id.style.visibility == "visible") {
                div_id.style.visibility = "hidden";
            }
            else {
                console.log("You can move ahead.")
            }
        })
    }
})