window.controller = window.controller || {}
controller.testnote = () => {
  let notes = ['c', 'cis', 'd', 'es', 'e', 'f', 'fis', 'g', 'as', 'a', 'b', 'h']
  show(    HAML.testnote({notes} )  )
  let sh_notes = _.shuffle(notes)
  let i = 0
  let play = (note)=>{console.log(note)}
  $('.note').click((e) => {
    if (e.target.id == `but_${sh_notes[i]}`) {
      console.log("правильный ответ")
      if (i + 1 ==sh_notes.length) {
        console.log("игра окончена")
      } else {
        play(sh_notes[++i])
      }
    } else {
      console.log("неправильный ответ")
    }
  })
  play(sh_notes[i])
}
