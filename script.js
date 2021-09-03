const pageNames = ['Ansioluettelo', 'Resume']
const links = ['ansioluettelo.html', 'resume.html']
const footerText = ['Aapo Raukovaara',
                    ['s1aara00@students.osao.fi', 'mailto:s1aara00@students.osao.fi'],
                    ['Github', 'https://github.com/rauaap/html-css']]
var homeButtonHighlighted = new Image()
homeButtonHighlighted.src = 'img/home2.png'
window.addEventListener('load', genMenu)
window.addEventListener('load', genFooter)

// text.innerHTML = loremIpsum

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
    navbar.appendChild( createHomeButton() )
    var languages = ['fi', 'gb']
    for ( var i = 0; i < links.length; i++ ) {
        var div = document.createElement('div')
        div.className = 'navbar-item edges-text centered-flex'
        var a = document.createElement('a')
        var flag = document.createElement('img')
        flag.src = `img/${languages[i]}.png`
        flag.className = 'flag-icon'
        a.appendChild(flag)
        a.href = links[i]
        var text = document.createTextNode(pageNames[i])
        a.appendChild(text)
        div.appendChild(a)
        navbar.appendChild(div)
    }
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
