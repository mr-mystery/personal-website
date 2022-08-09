
function link(num) {
    let iframe = document.getElementById('iframe')

    if(num === 'one') {
        iframe.setAttribute('src', 'https://mr-mystery-13.github.io/hosting-demo/')
    }
    if(num === 'two') {
        iframe.setAttribute('src', 'https://mr-mystery-13.github.io/Personal-Website/')
    }
    else if(num === 'three') {
        iframe.src = 'https://mr-mystery-13.github.io/P5-Game/'
        iframe.setAttribute('height', '520')
    }
}