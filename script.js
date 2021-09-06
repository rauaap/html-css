const pageNames = ['Ansioluettelo', 'Resume']
const links = ['ansioluettelo.html', 'resume.html']
const footerText = ['Aapo Raukovaara',
                    ['s1aara00@students.osao.fi', 'mailto:s1aara00@students.osao.fi'],
                    ['Github', 'https://github.com/rauaap/html-css']]
window.addEventListener('load', genMenu)
window.addEventListener('load', genFooter)
window.addEventListener('load', () => {chooseTheme(localStorage.themeChoice)})

function themeChanger() {
    localStorage.themeChoice ^= 1
    chooseTheme(localStorage.themeChoice)
}

function chooseTheme(i) {
    if ( i===undefined ) {
        console.log('Theme unchosen. Setting themeChoice to 1.')
        i = 0
        localStorage.themeChoice = i
    }
    var homeButtons = ['home.png', 'home2.png']
    var themeButtons = ['light.png', 'dark2.png']
    var themes = ['light', 'dark']
    homeButton.src = `img/${homeButtons[i]}`
    themeButton.src = `img/${themeButtons[i]}`
    theme.href = `${themes[i]}.css`
}

function createHomeButton() {
    var a = document.createElement('a')
    a.href = 'index.html'
    a.className = 'button-container centered-flex navbar-item'
    var img = document.createElement('img')
    img.id = 'homeButton'
    img.className = 'image-button'
    img.src = 'img/home.png'
    a.appendChild(img)
    return a
}

function createThemeButton() {
    var div = document.createElement('div')
    div.className = 'button-container centered-flex'
    var img = document.createElement('img')
    img.className = 'image-button'
    img.src = 'img/theme.png'
    img.id = 'themeButton'
    div.addEventListener('click', themeChanger)
    div.appendChild(img)
    return div
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
        var flag = document.createElement('img')
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
