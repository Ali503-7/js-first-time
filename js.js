let form = document.forms[0]

let numb = document.getElementsByName("elements")[0]
let txet = document.getElementsByName('texts')[0]
let selec = document.getElementsByName("type")[0]
let result = document.getElementsByClassName("results")[0]



form.onsubmit = function (e) {
    e.preventDefault();
    document.querySelectorAll(".box").forEach(e => e.remove())

  if (numb.value > 0) {
    for (let i = 0; i < numb.value; i++) {
      let divo = document.createElement(selec.value)
      result.appendChild(divo)
      let iner = document.createTextNode(txet.value)
      divo.appendChild(iner)
      divo.className = "box"
      divo.title = "Element"
      divo.id = `id-${i + 1}`
    }
  }

  

}

