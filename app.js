let list = document.querySelector(".list")
let input = document.querySelector(".input")
let btn = document.querySelector(".btn")


input.addEventListener("input", () => {
    if (input.value.trim() === "") {
        btn.setAttribute('disabled', 'true')
    }
    else {
        btn.removeAttribute('disabled')
    }
})


btn.addEventListener('click', () => {
    let item = document.createElement("li")
    item.textContent = input.value
    list.appendChild(item)
    input.value = ""
})
