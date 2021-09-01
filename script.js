const pageNames = ['Ansioluettelo', 'CV', 'Stuff', 'Morestuff']
const links = ['ansioluettelo.html', 'cv.html', 'stuff.html', 'morestuff.html']
const footerText = ['TEST0', 'TEST1', 'TEST2']
window.addEventListener('load', genMenu)
window.addEventListener('load', genFooter)

function createHomeButton() {
    var li = document.createElement('li')
    li.className = 'menu-item navbar-item'
    var a = document.createElement('a')
    var img = document.createElement('img')
    img.className = 'menu-icon'
    img.src = '/img/home.png'
    a.appendChild(img)
    li.appendChild(a)
    return li
}

function genMenu() {
    var navbar = document.getElementById('navbar')
    navbar.className = 'page-wide-bar'
    var list = document.createElement('ul')
    list.className = 'navigation'
    list.id = 'topMenu'
    list.appendChild( createHomeButton() )
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
    for ( i of footerText ) {
        var textElem = document.createElement('div')
        textElem.className = 'footer-text'
        textElem.innerHTML = i
        footer.appendChild(textElem)
    }
}
