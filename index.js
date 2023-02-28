const bodyElement = document.querySelector(".chung-ta");

const synth = window.speechSynthesis;
let mVoice;

if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
}

function loadVoices() {
    bodyElement.innerHTML += `<h3>vao ham load voices</h3>`;

    text = `Có ${synth.getVoices().length} ngôn ngữ`;

    bodyElement.innerHTML += `<h2>${text}</h2>`;

    for (let voice of synth.getVoices()) {
        bodyElement.innerHTML += `<p>${voice.name} - ${voice.lang} - ${voice.voiceURI}</p>`;
        if (voice.lang == "en-GB" || voice.lang == "en_GB") {
            mVoice = voice;
            break;
        }
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = mVoice;
    synth.speak(utterance);

    bodyElement.innerHTML += `<h3>ket thuc ham load voices</h3>`;
}
