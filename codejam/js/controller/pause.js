import { wrapper} from "../view/view";
import {startInterval} from "./timer"
import { boardShadow, btnShufStart } from "./shuffle";

const buttonPause = wrapper.header.btnCont.btnPause.node
export const btnSpan = wrapper.board.span.node

buttonPause.onclick = clickPause

function clickPause() {
    const timer = wrapper.header.timer.timerTimer.node
    if (timer.textContent !== "00:00") {
        if (buttonPause.textContent === "Pause") {
            startInterval("pause")
            buttonPause.textContent = "Continue"
            btnSpan.classList.add("shadow__pause")
            hiddenPause()
        } else {
            startInterval()
            buttonPause.textContent = "Pause"
            btnSpan.classList.remove("shadow__pause")
            notHiddenPause()
        }
    }
}

function hiddenPause() {
    boardShadow.classList.remove("display")
    btnSpan.textContent = "Pause"
    btnShufStart.classList.add("display")
}

export function notHiddenPause() {
    boardShadow.classList.add("display")
    btnSpan.textContent = ""
    btnShufStart.classList.remove("display")
}

export function toggle() {
    boardShadow.classList.remove("display")
    btnSpan.textContent = ""
    btnShufStart.classList.remove("display")
}

