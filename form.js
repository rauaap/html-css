contactButtons.addEventListener('click', otherField)

function otherField() {
    var texts = ['Yhteydenoton syy', 'Reason for contacting']
    if ( other.checked == true ) {
        otherText.disabled = false
        otherText.placeholder = texts[lang]
    }
    else {
        otherText.disabled = true
        otherText.placeholder = ''
    }
}
