const utterance = new SpeechSynthesisUtterance();
const bodyElement = document.querySelector(".chung-ta");

document.addEventListener("DOMContentLoaded", function (event) {
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    } else {
        setTimeout(loadVoices, 100);
    }
});

function loadVoices() {
    bodyElement.innerHTML += `<h2>Có ${
        speechSynthesis.getVoices().length
    } ngôn ngữ</h2>`;

    for (let voice of speechSynthesis.getVoices()) {
        bodyElement.innerHTML += `<p>${voice.name}</p>`;
    }
}
