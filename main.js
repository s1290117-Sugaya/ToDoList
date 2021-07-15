const main = document.getElementById("main")
const button = document.getElementById("button")
const textarea = document.getElementById("textarea")

function addTask(){
	let i=0
	const pElement = document.createElement("p")
	const pButton = document.createElement("button")
	pElement.textContent = textarea.value
	pElement.id = i
	pButton.value = "削除"
	pButton.id = i++
	main.appendChild(pElement)
	main.appendChild(pButton)

function rmTask(){
        pElement.remove()
        pButton.remove()
}

        pButton.addEventListener("click", rmTask)
}

button.addEventListener("click", addTask)



