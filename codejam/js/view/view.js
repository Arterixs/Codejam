 class View {
    constructor(tag, className, parent) {
        const node = document.createElement(tag)
        node.className = className
        parent.append(node)
        this.node = node
    }
}

class Wrapper extends View {
    footer
    board
    header
    constructor(tag, className, parent) {
        super(tag, className, parent)
        const conteiner = new View("div", "conteiner", this.node)
        this.header = new Header("header", "header", conteiner.node)
        this.board = new Board("main", "main", conteiner.node)
        this.footer = new Footer("footer", "footer", conteiner.node)
    }
}

class Header extends View {
    btnCont
    timer
    constructor(tag, className, parent) {
        super(tag, className, parent)
        const title = new View("h1", "title", this.node)
        title.node.textContent = "15 Puzzle"
        this.btnCont = new Button("div", "btnCont pointer", this.node)
        this.timer = new Timer("div", "data-cont", this.node)
    }
}

class Button extends View {
    btnShuffle
    btnPause
    btnSound
    soundSpan
    constructor(tag, className, parent) {
        super(tag, className, parent)
        this.btnShuffle = new View("button", "button shuffle", this.node)
        this.btnShuffle.node.textContent = "New game"
        this.btnPause = new View("button", "button pause", this.node)
        this.btnPause.node.textContent = "Pause"
        this.btnSound = new View("button", "button sound", this.node)
        this.soundSpan = new View("span", "icon", this.btnSound.node)
        const btnResult = new View("button", "button result", this.node)
        btnResult.node.textContent = "Results"
    }
}

class Timer extends View {
    moveNumber
    timerTimer
    constructor(tag, className, parent) {
        super(tag, className, parent)
        const moveCont = new View("div", "move-cont", this.node)
        const moveText = new View("p", "move-cont__text", moveCont.node)
        this.moveNumber = new View("p", "move-cont__number", moveCont.node)
        moveText.node.textContent = "Move:"
        this.moveNumber.node.textContent = 0
        const timerCont = new View("div", "timer-cont", this.node)
        const timerText = new View("p", "timer-cont__text", timerCont.node)
        this.timerTimer = new View("p", "timer-cont__timer", timerCont.node)
        timerText.node.textContent = "Time:"
        this.timerTimer.node.textContent = `00:00`
    }
}

class Board extends View {
    cell
    boardWrap
    btnShuffleStart
    boardShadow
    span
    constructor(tag, className, parent) {
        super(tag, className, parent)
        const boardCont = new View("div", "board-cont", this.node)
        this.boardWrap = new View("div", "board-wrap", boardCont.node)
        this.boardShadow = new View("div", "shadow", boardCont.node)
        this.btnShuffleStart = new View("button", "button shuffleStart", this.boardShadow.node)
        this.btnShuffleStart.node.textContent = "Shuffle and start"
        this.span = new View("span", "shadow__span", this.boardShadow.node)
        this.generate(17, "four")
    }
    generate(num, className) {
        for (let i = 1; i < num; i++) {
            if (i === num - 1) {
                this.cell = new View("div", `cell ${className} null`, this.boardWrap.node)
                this.cell.node.draggable = true
                return
            }
            this.cell = new View("div", `cell ${className}`, this.boardWrap.node)
            this.cell.node.textContent = i;
            this.cell.node.draggable = true
        }
    }
    random(arr, className) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                this.cell = new View("div", `cell ${className} null`, this.boardWrap.node)
                this.cell.node.draggable = true
                continue
            }
            this.cell = new View("div", `cell ${className}`, this.boardWrap.node)
            this.cell.node.textContent = arr[i];
            this.cell.node.draggable = true
        }
    }
}

class Footer extends View {
    outherSizeOne
    outherSizeTwo
    outherSizeThree 
    outherSizeFour
    outherSizeFive
    outherSizeSix
    frameSize
    outherLink
    constructor(tag, className, parent) {
        super(tag, className, parent)
        const footerCont = new View("div", "footer-cont", this.node)
        const frameCont = new View("div", "frame-cont", footerCont.node)
        const frameText = new View("p", "frame-cont__text", frameCont.node)
        this.frameSize = new View("p", "frame-cont__size", frameCont.node)
        frameText.node.textContent = "Frame size:"
        this.frameSize.node.textContent = "4x4"
        const outherCont = new View("div", "outher-cont", footerCont.node)
        const outherText = new View("p", "outher-cont__text", outherCont.node)
        outherText.node.textContent = "Other size:"
        this.outherLink = new View("div", "outher-link", outherCont.node)
        this.outherSizeOne = new View("p", "outher-link__size", this.outherLink.node)
        this.outherSizeOne.node.textContent = "3x3"
        this.outherSizeTwo = new View("p", "outher-link__size outher-link__size_active", this.outherLink.node)
        this.outherSizeTwo.node.textContent = "4x4"
        this.outherSizeThree = new View("p", "outher-link__size", this.outherLink.node)
        this.outherSizeThree.node.textContent = "5x5"
        this.outherSizeFour = new View("p", "outher-link__size", this.outherLink.node)
        this.outherSizeFour.node.textContent = "6x6"
        this.outherSizeFive = new View("p", "outher-link__size", this.outherLink.node)
        this.outherSizeFive.node.textContent = "7x7"
        this.outherSizeSix = new View("p", "outher-link__size", this.outherLink.node)
        this.outherSizeSix.node.textContent = "8x8"
    }
}

const wrapper = new Wrapper("div", "wrapper", document.body)

export {wrapper}