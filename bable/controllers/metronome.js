'use strict';

window.controller = window.controller || {};
controller.metronome = function () {
  var min = 40;
  var max = 200;
  var aids = [];
  var num = 0;
  for (var i = 0; i < 1000; i++) {
    aids.push('a' + i);
  }
  show(HAML.metronome({ min: min, max: max, aids: aids }));

  var stop_ = document.getElementById('stopmetro');
  var start_ = document.getElementById('startmetro');
  var temp_ = document.getElementById('temp');
  var tempwrite_ = document.getElementById('tempwrite');
  var as = document.getElementsByTagName('audio');

  var startmusic = function startmusic() {
    as[num].play();
    num = (num + 1) % as.length;
    //Функция parseInt() принимает строку в качестве аргумента и 
    // возвращает целое число в соответствии с указанным основанием системы счисления
    var temp = parseInt(temp_.value);
    return setInterval(function () {
      as[num].play();
      num = (num + 1) % as.length;
    }, parseInt(60000 / temp));
  };

  var iid = void 0;
  var flag = 0;

  tempwrite_.value = temp.value;
  handlerEvent('startmetro', 'click', function (event) {
    flag = 1;
    iid = startmusic(event.target.value);
    start_.classList.add('hidden');
    stop_.classList.remove('hidden');
  });

  handlerEvent('tempwrite', 'change', function (event) {
    var val = temp_.value;
    val = val > max ? max : val < min ? min : tempwrite_.value;
    temp_.value = val;
    if (flag == 1) {
      clearInterval(iid);
      iid = startmusic(event.target.value);
    }
  });

  handlerEvent('temp', 'change', function (event) {
    tempwrite_.value = temp_.value;
    if (flag == 1) {
      clearInterval(iid);
      iid = startmusic(event.target.value);
    }
  });

  handlerEvent('stopmetro', 'click', function (event) {
    flag = 0;
    [].forEach.call(as, function (a) {
      a.pause();a.currentTime = 0;
    });
    start_.classList.remove('hidden');
    stop_.classList.add('hidden');
    clearInterval(iid);
  });
};
//# sourceMappingURL=metronome.js.map
