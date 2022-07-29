function link(num) {
    let iframe
    if(num==='one') {
        iframe = document.getElementById('iframe')	
        iframe.setAttribute('src', 'https://mr-mystery-13.github.io/hosting-demo/')
    }
    if(num==='two') {
        iframe = document.getElementById('iframe')	
        iframe.setAttribute('src', 'https://mr-mystery-13.github.io/Personal-Website/')
    }
}