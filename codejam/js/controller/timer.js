import { wrapper} from "../view/view";


export const startTimer = timer()
let timerId = null

export function startInterval(reset) {
    if (reset === "pause") {
        return clearInterval(timerId)
    }
    if (reset === "stop") {
        startTimer("stop")
       return clearInterval(timerId)
    }
    return timerId = setInterval(startTimer, 1000)
}

function timer() {
    const timer = wrapper.header.timer.timerTimer.node
    let second = 0
    let minute = 0
    return function (times) {
        if (times === "stop") {
            timer.textContent = "00:00"
            second = 0
            minute = 0
            return
        }
        second++
        if (second < 10) {
            timer.textContent = `0${minute}:0${second}`
        }
        if (second >= 10) {
            timer.textContent = `0${minute}:${second}`
        }
        if (second > 59) {
            second = 0
            minute++
            timer.textContent = `0${minute}:0${second}`
        }
        if (minute >= 10) {
            timer.textContent = `${minute}:0${second}`
        }
    }  
}

