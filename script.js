const pageNames = ['Ansioluettelo', 'CV', 'Stuff', 'Morestuff']
const links = ['ansioluettelo.html', 'cv.html', 'stuff.html', 'morestuff.html']
const footerText = ['TEST0', 'TEST1', 'TEST2']
window.addEventListener('load', genMenu)
window.addEventListener('load', genFooter)

function createHomeButton() {
    var div = document.createElement('div')
    div.className = 'menu-item navbar-item'
    var a = document.createElement('a')
    a.href = '/'
    a.className = 'home-link'
    var img = document.createElement('img')
    img.className = 'menu-icon'
    img.src = '/img/home.png'
    a.appendChild(img)
    div.appendChild(a)
    return div
}

function genMenu() {
    var navbar = document.getElementById('navbar')
    navbar.className = 'page-wide-bar top fixed'
    navbar.appendChild( createHomeButton() )
    for ( var i = 0; i < links.length; i++ ) {
        var div = document.createElement('div')
        div.className = 'menu-item navbar-item'
        var a = document.createElement('a')
        a.href = '/pages/' + links[i]
        a.innerHTML = pageNames[i]
        div.appendChild(a)
        navbar.appendChild(div)
    }
}

function genFooter() {
    var footer = document.getElementById('footer')
    footer.className = 'page-wide-bar bottom fixed'
    for ( i of footerText ) {
        var textElem = document.createElement('div')
        textElem.className = 'footer-text'
        textElem.innerHTML = i
        footer.appendChild(textElem)
    }
}
