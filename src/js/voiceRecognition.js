const elementShoot = document.getElementById('shoot')

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

function onSpeak (e) {
    let shoot = e.results[0][0].transcript
    displayTentative(shoot)
}

recognition.addEventListener('result', onSpeak)

function displayTentative(shoot) {
    elementShoot.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${shoot}</span>
    `
}

recognition.start()
recognition.addEventListener('end', () => recognition.start())