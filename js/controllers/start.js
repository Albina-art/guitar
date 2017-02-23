window.controller = window.controller || {}
controller.start = () => {
  show(HAML.start(), 'app')
  document.getElementById('metronome').addEventListener('click', (event) => {
    event.target.setAttribute('disabled', true)
    debugger
    document.getElementById('metronome').setAttribute('disabled', true)
    console.log("fsf")
    controller.metronome()
  })
}
