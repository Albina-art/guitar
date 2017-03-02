window.controller = window.controller || {}
controller.start = () => {
  let buttons = ["metronome", "github", "testnote"]
  show(HAML.start(), 'app')
  buttons.forEach((b) => {
    handlerEvent(b, 'click', () => {
      console.log("Мена нажали")
      buttons.forEach((t) => {
        if (b==t) {
          document.getElementById(t).setAttribute('disabled', true)
        } else {
          document.getElementById(t).removeAttribute('disabled')
        }
      })
      controller[b]("metronome")
    })
  })
  // handlerEvent('metronome', 'click', () => {
  //   document.getElementById('git').removeAttribute('disabled')
  //   document.getElementById('test').removeAttribute('disabled')
  //   document.getElementById('metronome').setAttribute('disabled', true)
  //   controller.metronome()
  // })
  // handlerEvent('test', 'click', () => {
  //   document.getElementById('git').removeAttribute('disabled')
  //   document.getElementById('metronome').removeAttribute('disabled')
  //   document.getElementById('test').setAttribute('disabled', true)
  //   controller.testnote()
  // })
  // handlerEvent('git', 'click', () => {
  //   document.getElementById('metronome').removeAttribute('disabled')
  //   document.getElementById('test').removeAttribute('disabled')
  //   document.getElementById('git').setAttribute('disabled', true)
  //   controller.github('metronome')
  // })
}
