import { wrapper } from "../view/view";
import {collectionSquare} from "./collection";
import { findEl } from "./drop";
import { examination } from "./examination";
import {startInterval} from "./timer"
import { myAudio } from "./sound";

export const moveCount = wrapper.header.timer.moveNumber.node

export function generateFunc() {
    for (let i = 0; i < collectionSquare.length; i++) {
        collectionSquare[i].onclick = move
    }
}

window.onload = generateFunc()
export const counter = count()

function count() {
    let count = 0
    return function(reset) {
        if (reset === "true") {
            moveCount.textContent = 0
            return count = 0
        }
        count++
        moveCount.textContent = count
    }
}

function move() {
    const arr = Array.from(collectionSquare)
    let itemNull = ""
    arr.find(item => item.classList[2] === "null" ? itemNull = item  : false)
    const el = this
    const itemClick = arr.indexOf(this, 0)
    const num = Math.sqrt(arr.length)
    const itemDown = arr[itemClick + num]
    const itemUp = arr[itemClick - num]
    
    if (this.previousElementSibling === itemNull || this.nextElementSibling === itemNull || itemDown === itemNull || itemUp === itemNull) {
        counter()
        itemNull.classList.remove("null")
        itemNull.ondragover = null
        el.classList.add("null")
        itemNull.textContent = el.textContent
        el.textContent = ""
        findEl()
        myAudio.play()
        collectionSquare.forEach(item => item.onclick = null)
        if (moveCount.textContent === "1") {
            startInterval()
        }
        setTimeout(() => {
            collectionSquare.forEach(item => item.onclick = move)
        }, 500)
        setTimeout(() => {
            examination()
        }, 700)
     
    } 
}


