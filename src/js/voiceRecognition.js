const elementShoot = document.getElementById('shoot')
const elementStart = document.getElementById('btn-start')

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

function onSpeak (e) {
    let shoot = e.results[0][0].transcript
    validateAttempt(shoot)
}

recognition.addEventListener('result', onSpeak)

function displayTentative(shoot) {
    elementShoot.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${shoot}</span>
    `
}

elementStart.addEventListener('click', () => {
  elementShoot.innerHTML = `
    <h2>
      <i class="fa fa-microphone"></i> 
      Tente falar um número!
    </h2>  
  `
  recognition.start()
})

recognition.addEventListener('end', () => recognition.start())