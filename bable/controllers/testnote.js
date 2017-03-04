'use strict';

window.controller = window.controller || {};
controller.testnote = function () {
  var notes = ['c', 'cis', 'd', 'es', 'e', 'f', 'fis', 'g', 'as', 'a', 'b', 'h'];
  show(HAML.testnote({ notes: notes }));
  var sh_notes = _.shuffle(notes);
  var i = 0;
  var play = function play(note) {
    console.log(note);
  };
  $('.note').click(function (e) {
    if (e.target.id == 'but_' + sh_notes[i]) {
      console.log("правильный ответ");
      if (i + 1 == sh_notes.length) {
        console.log("игра окончена");
      } else {
        play(sh_notes[++i]);
      }
    } else {
      console.log("неправильный ответ");
    }
  });
  play(sh_notes[i]);
};
//# sourceMappingURL=testnote.js.map
