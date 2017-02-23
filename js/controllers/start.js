window.controller = window.controller || {}
controller.start = () => {
	show(HAML.start(), 'app')
  	hendlerEvent('metronome', 'click', () => {
    document.getElementById('metronome').setAttribute('disabled', true)	
    controller.metronome()
  })
}
