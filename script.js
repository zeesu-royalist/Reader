let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Load voices
function loadVoices() {
    voices = window.speechSynthesis.getVoices();

    // clear old options
    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        let option = document.createElement("option");
        option.value = i; 
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });

    // set default voice
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
}

// Some browsers need this
window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices(); // call at least once

// Change voice when user selects
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[parseInt(voiceSelect.value)];
});

// Speak on button click
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.cancel(); // stop previous speech
    window.speechSynthesis.speak(speech);
});

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
