import {collectionSquare} from "./collection";
import { counter, moveCount } from "./move";
import { startInterval } from "./timer";
import { wrapper } from "../view/view";
import { boardShadow, btnShufStart } from "./shuffle";
import { btnSpan } from "./pause";
const timer = wrapper.header.timer.timerTimer.node
export function examination() {
    const win = []
    const arr = []
    for (let i = 0; i < collectionSquare.length - 1; i++) {
        arr.push(Number(collectionSquare[i].textContent))
    }
    for (let i = 1; i < collectionSquare.length; i++) {
        win.push(i)
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== win[i]) {
            return 
        }
    }
        result()
}

function result() {
    boardShadow.classList.remove("display")
    let time = timer.textContent
    let move = moveCount.textContent
    btnSpan.textContent = `«Ура! Вы решили головоломку за ${time} и ${move} ходов!»`
    btnShufStart.classList.add("display")
    startInterval("pause")
}

