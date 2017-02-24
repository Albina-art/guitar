window.controller = window.controller || {}
controller.start = () => {
  show(HAML.start(), 'app')
  hendlerEvent('metronome', 'click', () => {
    document.getElementById('git').removeAttribute('disabled')  
    document.getElementById('test').removeAttribute('disabled')	
    document.getElementById('metronome').setAttribute('disabled', true)	
    controller.metronome()
  })
  hendlerEvent('test', 'click', () => {
    document.getElementById('git').removeAttribute('disabled')  
    document.getElementById('metronome').removeAttribute('disabled')	
    document.getElementById('test').setAttribute('disabled', true)	
    controller.testnote()
  })
  hendlerEvent('git', 'click', () => {
    document.getElementById('metronome').removeAttribute('disabled')  
    document.getElementById('test').removeAttribute('disabled') 
    document.getElementById('git').setAttribute('disabled', true)  
    controller.github()
  })
}
