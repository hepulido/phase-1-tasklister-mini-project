document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    createElement(e.target['new-task-description'].value)
  })

});

function createElement(element){
  let p = document.createElement("p")
  let button = document.createElement("button")
  button.addEventListener("click", handleDelete)
  button.textContent = "x"
  p.textContent = `${element} `
  p.appendChild(button)
  console.log(p)
  document.querySelector("#tasks").appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}