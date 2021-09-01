var pageNames = ['Ansioluettelo', 'CV', 'Stuff']
var links = ['ansioluettelo.html', 'cv.html', 'stuff.html']
window.addEventListener('load', genMenu)

function genMenu() {
    var navbar = document.getElementById('navbar')
    var list = document.createElement('ul')
    for ( var i = 0; i < links.length; i++ ) {
        var li = document.createElement('li')
        li.className = 'menu-item top'
        var a = document.createElement('a')
        a.href = '/pages/' + links[i]
        a.innerHTML = pageNames[i]
        li.appendChild(a)
        list.appendChild(li)
    }
    navbar.appendChild(list)
}
