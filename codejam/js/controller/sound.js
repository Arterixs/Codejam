import sound from '../../assets/mp3/sound.mp3';
import { wrapper } from '../view/view';

const btnSound = wrapper.header.btnCont.btnSound.node
const spanSound = wrapper.header.btnCont.soundSpan.node

export const myAudio = new Audio(sound)
myAudio.volume = 0.1
const music = musicOff()

btnSound.onclick = music



function musicOff() {
    let sound = true
    return function() {
        if (sound === true) {
            sound = false
            spanSound.classList.add("icon_off")
            return myAudio.volume = 0
        }
        sound = true
        spanSound.classList.remove("icon_off")
        return myAudio.volume = 0.1
    }
}