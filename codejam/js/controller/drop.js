import {collectionSquare} from "./collection";




findEl()
export function findEl() {
    const arr = Array.from(collectionSquare)
    let itemNull = ""
    arr.find(item => item.classList[2] === "null" ? itemNull = item  : false)
    itemNull.ondragover = allowDrop
    itemNull.ondrop = function() {
        itemNull.classList.remove("null")
        itemNull.ondragover = null
        evt.target.classList.add("null")
        itemNull.textContent =  evt.target.textContent
        evt.target.textContent = ""
        findEl()
    }
}



function allowDrop(e) {
    e.preventDefault()
}

