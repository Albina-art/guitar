// Этот файл необходим файл index.html и воли
// Выполняется в процессе визуализации для этого окна.
// Все API-интерфейсы Node.js доступны в этом процессе.
window.show = (teml, target) => {
    target = target || 'tab'
    //innerHTML Оно позволяет получить HTML-содержимое элемента в виде строки
	document.getElementById(target).innerHTML = teml
}
window.handlerEvent = (id, event, fn) => {
   document.getElementById(id).addEventListener(event, fn)
} 
window.controller = {}


