window.controller = window.controller || {}
controller.start = () => {
  show(HAML.start(), 'app')
  document.getElementById('metronome').addEventListener('click', () => {
    document.getElementById('metronome').setAttribute('disabled', true)	
    controller.metronome()
  })
}
