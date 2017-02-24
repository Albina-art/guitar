window.controller = window.controller || {}
controller.start = () => {
  show(HAML.start(), 'app')
  hendlerEvent('metronome', 'click', () => {
    document.getElementById('gmetronome').removeAttribute('disabled')	
    document.getElementById('metronome').setAttribute('disabled', true)	
    controller.metronome()
  })
  hendlerEvent('gmetronome', 'click', () => {
    document.getElementById('metronome').removeAttribute('disabled')	
    document.getElementById('gmetronome').setAttribute('disabled', true)	
    controller.github('metronome')
  })
}
