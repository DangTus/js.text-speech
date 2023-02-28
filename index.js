const utterance = new SpeechSynthesisUtterance();
const bodyElement = document.querySelector(".chung-ta");

let synth = window.speechSynthesis;

function loadVoices() {
    bodyElement.innerHTML += `<h3>vao ham load voices</h3>`;

    bodyElement.innerHTML += `<h2>Có ${
        synth.getVoices().length
    } ngôn ngữ</h2>`;

    for (let voice of synth.getVoices()) {
        bodyElement.innerHTML += `<p>${voice.name}</p>`;
    }

    bodyElement.innerHTML += `<h3>ket thuc ham load voices</h3>`;
}
