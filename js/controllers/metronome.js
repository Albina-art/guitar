window.controller = window.controller || {}
controller.metronome = () => {
  let min = 40 
  let max = 200
  let aids = []
  let num = 0
  for (let i = 0; i < 1000; i++){
    aids.push(`a${i}`)
  }
  show(HAML.metronome({min, max, aids}))

  let stop_ = document.getElementById('stopmetro')
  let start_ = document.getElementById('startmetro')
  let temp_ = document.getElementById('temp')
  let tempwrite_ = document.getElementById('tempwrite')
  var as = document.getElementsByTagName('audio')
  
  let startmusic = () => {
    as[num].play()
    num = (num + 1) % as.length
    let temp = parseInt(temp_.value)
    return setInterval( () => {
      as[num].play()
      num = (num + 1) % as.length
    }, parseInt(60000/temp) )
  }
  
  let iid
  let flag = 0
  
  tempwrite_.value = temp.value
  hendlerEvent('startmetro', 'click', (event) => {
    flag = 1
    iid = startmusic(event.target.value)
    start_.classList.add('hidden')
    stop_.classList.remove('hidden')
  })
  
  hendlerEvent('tempwrite','change', (event) => {
    let val = temp_.value
    val = val > max ? max : val < min ? min : tempwrite_.value
    temp_.value = val
    if (flag == 1) {
        clearInterval(iid)
        iid = startmusic(event.target.value)
    }
  })

  hendlerEvent('temp','change', (event) => {
    tempwrite_.value = temp_.value
      if (flag == 1) {
        clearInterval(iid)
        iid = startmusic(event.target.value)
      }
  })

  hendlerEvent('stop','click', (event) => {
    flag = 0;
    [].forEach.call(as, (a) => {a.pause(); a.currentTime = 0;})
    start_.classList.remove('hidden')
    stop_.classList.add('hidden')
    clearInterval(iid)
  })
}
