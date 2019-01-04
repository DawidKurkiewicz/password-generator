const button = document.createElement("button")
button.innerHTML = "generate your password"
document.body.appendChild(button)
const container = document.createElement("section")
document.body.appendChild(container)

const chars = "ABCDEFGHIJKLMNOPRSTUWXYZ01234567890!@#$%^&*()"
const btn = document.querySelector("button")
const section = document.querySelector("section")

const codesNumber = 1
const charsNumber = 10
const codeGen = () => {

    for (let i = 0; i < codesNumber; i++) {
        let code = ""
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length)
            code += chars[index]
        }
        container.innerHTML = ""
        const div = document.createElement("div")
        div.innerHTML = code
        container.appendChild(div)
    }
}

btn.addEventListener("click", codeGen)