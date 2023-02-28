const utterance = new SpeechSynthesisUtterance();
const bodyElement = document.querySelector(".chung-ta");

window.onload = function () {
    speechSynthesis.onvoiceschanged = loadVoices;
};

function loadVoices() {
    if (speechSynthesis.getVoices().length == 0) {
        bodyElement.innerHTML += `<p>không có cái nào</p>`;
        return;
    }

    for (let voice of speechSynthesis.getVoices()) {
        bodyElement.innerHTML += `<p>${voice.name}</p>`;
    }
}
