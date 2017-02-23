// Этот файл необходим файл index.html и воли
// Выполняется в процессе визуализации для этого окна.
// Все API-интерфейсы Node.js доступны в этом процессе.
window.show = (teml, target) => {
    target = target || 'tab'
	document.getElementById(target).innerHTML = teml
}
window.hendlerEvent = (id, event, fn) => {
   document.getElementById(id).addEventListener(event, fn)
} 
window.controller = {}


