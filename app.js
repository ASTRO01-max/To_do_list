let form = document.querySelector(".form")
let list = document.querySelector(".list")
let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let yaratildi = document.querySelector(".yaratildi")

btn.setAttribute('disabled', 'true')

function yaratildiFunc() {
    yaratildi.textContent = list.children.length
}

input.addEventListener("input", () => {
    if (input.value.trim() === "") {
        btn.setAttribute('disabled', 'true')
    }
    else {
        btn.removeAttribute('disabled')
    }
})


form.addEventListener('submit', (e) => {
    // yangilanishni oldini oladi
    e.preventDefault()
    const value = input.value.trim()
    if (value === "") {
        btn.setAttribute('disabled', 'true')
        return
    }
    const li = document.createElement('li')
    const icon = document.createElement('i')
    const checkbox = document.createElement("input")
    const text = document.createTextNode(value)
    const p = document.createElement('p')
    checkbox.type = 'checkbox'
    icon.classList = 'fa-solid fa-trash icon'
    p.classList = "text"
    icon.addEventListener('click', () => {
        li.remove()
        yaratildiFunc()
    })
    checkbox.addEventListener("change", () => {
        p.classList.toggle('completed')
    })
    p.appendChild(text)
    li.appendChild(checkbox)
    li.appendChild(p)
    li.appendChild(icon)
    list.appendChild(li)
    input.value = ""
    yaratildiFunc()
    btn.disabled = true
})
