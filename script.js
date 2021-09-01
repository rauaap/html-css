var pageNames = ['Ansioluettelo', 'CV', 'Stuff', 'Morestuff']
var links = ['ansioluettelo.html', 'cv.html', 'stuff.html', 'morestuff.html']
window.addEventListener('load', genMenu)
window.addEventListener('load', genFooter)

function genMenu() {
    var navbar = document.getElementById('navbar')
    navbar.className = 'page-wide-bar'
    var list = document.createElement('ul')
    list.className = 'navigation'
    list.id = 'topMenu'
    for ( var i = 0; i < links.length; i++ ) {
        var li = document.createElement('li')
        li.className = 'menu-item navbar-item'
        var a = document.createElement('a')
        a.href = '/pages/' + links[i]
        a.innerHTML = pageNames[i]
        li.appendChild(a)
        list.appendChild(li)
    }
    navbar.appendChild(list)
}

function genFooter() {
    var footer = document.getElementById('footer')
    footer.className = 'page-wide-bar bottom'
    for ( i of ['TEST0', 'TEST1', 'TEST2']) {
        var textElem = document.createElement('div')
        textElem.className = 'footer-text'
        textElem.innerHTML = i
        footer.appendChild(textElem)
    }
}
