const bodyElement = document.querySelector(".chung-ta");

const synth = window.speechSynthesis;
let mVoice;

if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
}

function loadVoices() {
    bodyElement.innerHTML = "";

    bodyElement.innerHTML += `<h2>Có ${synth.getVoices().length} ngôn ngữ</h2>`;

    for (let voice of synth.getVoices()) {
        bodyElement.innerHTML += `<p>${voice.name} - ${voice.lang} - ${voice.voiceURI}</p>`;
        if (voice.lang == "en-GB" || voice.lang == "en_GB") {
            mVoice = voice;
            break;
        }
    }

    utterance = new SpeechSynthesisUtterance();
    utterance.voice = mVoice;

    text = `Ngôn ngữ hiện tại: ${utterance.voice.name} - ${utterance.voice.lang}`;
    utterance.text = text;

    synth.speak(utterance);

    bodyElement.innerHTML += `<h3>${text}</h3>`;
}
