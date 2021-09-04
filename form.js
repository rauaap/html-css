contactButtons.addEventListener('click', otherField)

function otherField() {
    if ( other.checked == true ) {
        otherText.style.display = 'inline'
    }
    else {
        otherText.style.display = 'none'
    }
}
