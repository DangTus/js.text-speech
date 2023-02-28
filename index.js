const utterance = new SpeechSynthesisUtterance();
const bodyElement = document.querySelector(".chung-ta");

window.onload = function () {
    console.log("load");

    speechSynthesis.onvoiceschanged = loadVoices;
};

function loadVoices() {
    for (let voice of speechSynthesis.getVoices()) {
        bodyElement.innerHTML += `<p>${voice.name}</p>`;
        console.log(voice);
    }
}
