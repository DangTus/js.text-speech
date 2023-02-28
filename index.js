const utterance = new SpeechSynthesisUtterance();
const bodyElement = document.querySelector(".chung-ta");

window.onload = function () {
    speechSynthesis.onvoiceschanged = loadVoices;
};

function loadVoices() {
    bodyElement.innerHTML += `<h2>Có ${speechSynthesis.getVoices().length} ngôn ngữ</h2>`;

    for (let voice of speechSynthesis.getVoices()) {
        bodyElement.innerHTML += `<p>${voice.name}</p>`;
    }
}
