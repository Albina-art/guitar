// Этот файл необходим файл index.html и воли
// Выполняется в процессе визуализации для этого окна.
// Все API-интерфейсы Node.js доступны в этом процессе.
window.help = {
  setHandler: (id, ev, fn) => document.getElementById(id).addEventListener(ev, fn)
}
window.show = (teml, target) => {
        target = target || 'tab'
	document.getElementById(target).innerHTML = teml
  //querySelector
}
window.controller = {}


