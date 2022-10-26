import { wrapper} from "../view/view";
import {generateFunc, counter} from "./move"
import {collectionSquare} from "./collection"
import { startInterval} from "./timer"
import { boardShadow, contBtn } from "./shuffle"
import { toggle } from "./pause";

const btnThree = wrapper.footer.outherSizeOne.node
const btnFour = wrapper.footer.outherSizeTwo.node
const btnFive = wrapper.footer.outherSizeThree.node
const btnSix = wrapper.footer.outherSizeFour.node
const btnSeven = wrapper.footer.outherSizeFive.node
const btnEight = wrapper.footer.outherSizeSix.node
const link = wrapper.footer.outherLink.node
const frame = wrapper.footer.frameSize.node
const genSquare = wrapper.board


const collectionSize = link.childNodes

btnThree.onclick = sizeThree
btnFour.onclick = sizeFour
btnFive.onclick = sizeFive
btnSix.onclick = sizeSix
btnSeven.onclick = sizeSeven
btnEight.onclick = sizeEight

function sizeThree() {
    const buttonPause = wrapper.header.btnCont.btnPause.node
    buttonPause.textContent = "Pause"
    const arr = Array.from(collectionSquare)
    arr.forEach(item => {
        item.remove()
    })
    genSquare.generate(10, "three")
    frame.textContent = btnThree.textContent
    collectionSize.forEach(item => item.classList.remove("outher-link__size_active"))
    this.classList.add("outher-link__size_active")
    counter("true")
    startInterval("stop")
    generateFunc()
    hiddenNot()
    toggle()
}

function sizeFour() {
    const buttonPause = wrapper.header.btnCont.btnPause.node
    buttonPause.textContent = "Pause"
    const arr = Array.from(collectionSquare)
    arr.forEach(item => {
        item.remove()
    })
    genSquare.generate(17, "four")
    frame.textContent = btnFour.textContent
    collectionSize.forEach(item => item.classList.remove("outher-link__size_active"))
    this.classList.add("outher-link__size_active")
    counter("true")
    startInterval("stop")
    generateFunc()
    hiddenNot()
    toggle()
}

function sizeFive() {
    const buttonPause = wrapper.header.btnCont.btnPause.node
    buttonPause.textContent = "Pause"
    const arr = Array.from(collectionSquare)
    arr.forEach(item => {
        item.remove()
    })
    genSquare.generate(26, "five")
    frame.textContent = btnFive.textContent
    collectionSize.forEach(item => item.classList.remove("outher-link__size_active"))
    this.classList.add("outher-link__size_active")
    counter("true")
    startInterval("stop")
    generateFunc()
    hiddenNot()
    toggle()
}

function sizeSix() {
    const buttonPause = wrapper.header.btnCont.btnPause.node
    buttonPause.textContent = "Pause"
    const arr = Array.from(collectionSquare)
    arr.forEach(item => {
        item.remove()
    })
    genSquare.generate(37, "six")
    frame.textContent = btnSix.textContent
    collectionSize.forEach(item => item.classList.remove("outher-link__size_active"))
    this.classList.add("outher-link__size_active")
    counter("true")
    startInterval("stop")
    generateFunc()
    hiddenNot()
    toggle()
}

function sizeSeven() {
    const buttonPause = wrapper.header.btnCont.btnPause.node
    buttonPause.textContent = "Pause"
    const arr = Array.from(collectionSquare)
    arr.forEach(item => {
        item.remove()
    })
    genSquare.generate(50, "seven")
    frame.textContent = btnSeven.textContent
    collectionSize.forEach(item => item.classList.remove("outher-link__size_active"))
    this.classList.add("outher-link__size_active")
    counter("true")
    startInterval("stop")
    generateFunc()
    hiddenNot()
    toggle()
}

function sizeEight() {
    const buttonPause = wrapper.header.btnCont.btnPause.node
    buttonPause.textContent = "Pause"
    const arr = Array.from(collectionSquare)
    arr.forEach(item => {
        item.remove()
    })
    genSquare.generate(65, "eight")
    frame.textContent = btnEight.textContent
    collectionSize.forEach(item => item.classList.remove("outher-link__size_active"))
    this.classList.add("outher-link__size_active")
    counter("true")
    startInterval("stop")
    generateFunc()
    hiddenNot()
    toggle()
}

function hiddenNot() {
    contBtn.classList.add("pointer")
    return boardShadow.classList.remove("display")
}