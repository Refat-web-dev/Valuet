let tabs = document.querySelectorAll("aside p")
let title = document.querySelector("main h2")

tabs.forEach(btn => {
    let key = btn.id
    btn.style.backgroundImage = `url("/public/icons/${key}.svg")`

    btn.onclick = () => {
        tabs.forEach(btn => btn.classList.remove("active_link"))
        btn.classList.add("active_link")
        if (btn.id !== "out" && btn.id !== "ellipse") {
            title.innerHTML = btn.innerHTML
        }
        console.log(title);
    }
})