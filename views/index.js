const inputValue = document.getElementById('urlInput')

function twitterDL() {
    window.location.href = `${window.location.href}twitter?URL=${inputValue.value}`;
}

function quaRet() {
    return 'OUI'
}