const utterance = new SpeechSynthesisUtterance();
const bodyElement = document.querySelector(".chung-ta");

const synth = window.speechSynthesis;

if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
}

function loadVoices() {
    bodyElement.innerHTML += `<h3>vao ham load voices</h3>`;

    text = `Có ${synth.getVoices().length} ngôn ngữ`;

    bodyElement.innerHTML += `<h2>${text}</h2>`;

    for (let voice of synth.getVoices()) {
        bodyElement.innerHTML += `<p>${voice.name}</p>`;
    }

    utterance.text = text;
    synth.speak(utterance);

    bodyElement.innerHTML += `<h3>ket thuc ham load voices</h3>`;
}
