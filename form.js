contactButtons.addEventListener('click', otherField)
mainForm.addEventListener('submit', ()=>alert('Lomakkeesi on vastaanotettu\nYour form has been submitted'))

function otherField() {
    var texts = ['Yhteydenoton syy', 'Reason for contacting']
    if ( other.checked == true ) {
        otherText.disabled = false
        otherText.style.visibility = 'visible'
    }
    else {
        otherText.disabled = true
        otherText.style.visibility = 'hidden'
    }
}
