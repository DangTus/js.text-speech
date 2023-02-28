const utterance = new SpeechSynthesisUtterance();
const bodyElement = document.querySelector(".chung-ta");

document.addEventListener("DOMContentLoaded", function (event) {
    bodyElement.innerHTML += `<h3>truoc khi vao if else</h3>`;

    if (speechSynthesis.onvoiceschanged !== undefined) {
        bodyElement.innerHTML += `<h3>vao if</h3>`;

        speechSynthesis.onvoiceschanged = loadVoices;
    } else {
        bodyElement.innerHTML += `<h3>vao else</h3>`;

        setTimeout(loadVoices, 100);
    }
});

function loadVoices() {
    bodyElement.innerHTML += `<h3>vao ham load voices</h3>`;


    bodyElement.innerHTML += `<h2>Có ${
        speechSynthesis.getVoices().length
    } ngôn ngữ</h2>`;

    for (let voice of speechSynthesis.getVoices()) {
        bodyElement.innerHTML += `<p>${voice.name}</p>`;
    }

    bodyElement.innerHTML += `<h3>ket thuc ham load voices</h3>`;
}
