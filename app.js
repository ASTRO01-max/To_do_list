let form = document.querySelector(".form")
let list = document.querySelector(".list")
let input = document.querySelector(".input")
let btn = document.querySelector(".btn")
let yaratildi = document.querySelector(".yaratildi")
let finished = document.querySelector(".finished")
let yaratilgan = document.querySelector(".yaratilgan")

btn.setAttribute('disabled', 'true')

function yaratildiFunc() {
    // let total = list.children.length
    // let completed = list.querySelectorAll("p.completed").length
    // yaratildi.textContent = total - completed
    yaratildi.textContent = list.children.length
}

function finishedFunc() {
    finished.textContent = list.querySelectorAll("p.completed").length
    yaratilgan.textContent = list.children.length
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
        finishedFunc()
    })
    checkbox.addEventListener("change", () => {
        p.classList.toggle('completed')
        yaratildiFunc()
        finishedFunc()
    })
    p.appendChild(text)
    li.appendChild(checkbox)
    li.appendChild(p)
    li.appendChild(icon)
    list.appendChild(li)
    input.value = ""
    yaratildiFunc()
    finishedFunc()
    btn.disabled = true
})
