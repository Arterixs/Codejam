import { wrapper} from "../view/view";
import {collectionSquare} from "./collection";
import { generateFunc, counter } from "./move";
import { startInterval } from "./timer";
import { notHiddenPause } from "./pause";

const btnStart = wrapper.header.btnCont.btnShuffle.node
export const btnShufStart = wrapper.board.btnShuffleStart.node
export const boardShadow = wrapper.board.boardShadow.node
export const contBtn = wrapper.header.btnCont.node
const boardRandom = wrapper.board

btnShufStart.addEventListener("click", shuffleCell)
btnShufStart.addEventListener("click", hidden)

function hidden() {
    contBtn.classList.remove("pointer")
    return boardShadow.classList.add("display")
}

btnStart.onclick = shuffleCell

function shuffleCell() {
    const buttonPause = wrapper.header.btnCont.btnPause.node
    const arr = Array.from(collectionSquare)
    const className = arr[0].classList[1]
    const arr2 = []
    arr.forEach(item => arr2.push(Number(item.textContent)))
    let newArr = shuffle(arr2)
    arr.forEach(item => {
        item.remove()
    })
    boardRandom.random(newArr, className)
    startInterval("stop")
    counter("true")
    generateFunc()
    notHiddenPause ()
    buttonPause.textContent = "Pause"
}

function shuffle(arr){
    let j = 0;
    let temp;
    let sum = 0
    let ar = []
     recurs(arr)
     function recurs(arrays) {
        const array = Array.from(arrays)
        for(let i = array.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
        for (let i = 0; i < array.length; i++) {
            for (let j = i; j < array.length;j++) {
              if (array[i] > array[j] && array[j] !== 0) {
                sum += 1
              }
            }
          }
        if (sum % 2 !== 0) {
            sum = 0
            recurs(array)
        } else {
            ar = array
            return array
        }
    }
    return ar
}