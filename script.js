const pageNames = ['Ansioluettelo', 'Resume']
const links = ['ansioluettelo.html', 'resume.html']
const footerText = ['Aapo Raukovaara',
                    ['s1aara00@students.osao.fi', 'mailto:s1aara00@students.osao.fi'],
                    ['Github', 'https://github.com/rauaap/html-css']]
var homeButtonHighlighted = new Image()
var flag = document.createElement('img')
homeButtonHighlighted.src = 'img/home2.png'
window.addEventListener('load', genMenu)
window.addEventListener('load', genFooter)
window.addEventListener('load', () => {chooseTheme(localStorage.themeChoice)})

function themeChanger() {
    localStorage.themeChoice ^= 1
    chooseTheme(localStorage.themeChoice)
}

function chooseTheme(i) {
    if ( i===undefined ) {
        console.log('hey')
        i = 0
    }
    var themes = ['dark', 'light']
    theme.href = `${themes[i]}.css`
}

function createHomeButton() {
    var div = document.createElement('div')
    div.className = 'menu-item navbar-item centered-flex'
    var a = document.createElement('a')
    a.href = 'index.html'
    a.className = 'home-link centered-flex'
    var img = document.createElement('img')
    img.id = 'homeButton'
    img.addEventListener('mouseover', highlightHomeButton)
    img.addEventListener('mouseout', highlightHomeButton)
    img.className = 'menu-icon'
    img.src = 'img/home.png'
    a.appendChild(img)
    div.appendChild(a)
    return div
}

function createThemeButton() {
    var img = document.createElement('img')
    img.className = 'image-button'
    img.src = 'img/theme.png'
    img.addEventListener('click', themeChanger)
    return img
}

function highlightHomeButton() {
    if ( event.type == 'mouseover' ) {
        event.target.src = 'img/home2.png'
    }
    else if ( event.type == 'mouseout') {
        event.target.src = 'img/home.png'
    }
}

function genMenu() {
    var navbar = document.getElementById('navbar')
    navbar.className = 'page-wide-bar top fixed'
    var left = document.createElement('div')
    left.className = 'navbar-left-items'
    left.appendChild( createHomeButton() )
    var languages = ['fi', 'gb']
    for ( var i = 0; i < links.length; i++ ) {
        var div = document.createElement('div')
        div.className = 'navbar-item edges-text centered-flex'
        var a = document.createElement('a')
        flag.src = `img/${languages[i%2]}.png`
        flag.className = 'flag-icon'
        a.appendChild(flag)
        a.href = links[i]
        var text = document.createTextNode(pageNames[i])
        a.appendChild(text)
        div.appendChild(a)
        left.appendChild(div)
    }
    navbar.appendChild(left)
    navbar.appendChild( createThemeButton() )
}

function genFooter() {
    var footer = document.getElementById('footer')
    footer.className = 'page-wide-bar bottom fixed'
    for ( i of footerText ) {
        var textElem = document.createElement('div')
        textElem.className = 'footer-text edges-text centered-flex'
        if ( Array.isArray(i) ) {
            insertLink(textElem, i)
        }
        else {
        textElem.innerHTML = i
        }
        footer.appendChild(textElem)
    }
}

function insertLink(elem, linkArray) {
    var text = linkArray[0]
    var link = linkArray[1]
    var a = document.createElement('a')
    a.href = link
    a.innerHTML = text
    elem.appendChild(a)
}
