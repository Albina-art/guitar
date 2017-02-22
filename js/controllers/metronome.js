window.controller = window.controller || {}
controller.metronome = () => {
  let min = 40
  let max = 200
  let aids = []
  for (let i=0; i< 1000; i++){
    aids.push(`a${i}`)
  }
  show(HAML.metronome({min, max, aids}))
  let num = 0
  var as
  as = document.getElementsByTagName('audio')
  let start = () => {
    as[num].play()
    num = (num + 1) % as.length
    let temp = parseInt(document.getElementById('temp').value)
    return setInterval(()=>{
      as[num].play()
      num = (num + 1) % as.length
    }, parseInt(60000/temp) )
  }
  let iid
  let flag = 0
  document.getElementById('startmetro').addEventListener('click', (event) => {
    iid = start(event.target.value)
    flag = 1
    document.getElementById('startmetro').classList.add('hidden')
    document.getElementById('stopmetro').classList.remove('hidden')
  })
  document.getElementById('temp').addEventListener('change',(event) => {
      if(flag == 1){
        // console.log("dfef")
        clearInterval(iid)
        //
        iid = start(event.target.value)
      }
  })
  document.getElementById('stopmetro').addEventListener('click', (event) => {
    flag = 0;
    [].forEach.call(as, (a) => {a.pause(); a.currentTime = 0;})
    document.getElementById('startmetro').classList.remove('hidden')
    document.getElementById('stopmetro').classList.add('hidden')
    clearInterval(iid)
    // document.getElementById('metro').setAttribute('disabled', true)
  })
}
