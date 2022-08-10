AOS.init();

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


me = {
    L1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, animi repellat! Saepe recusandae numquam eligendi praesentium dolorum cumque minima ipsum, obcaecati, a molestiae at, excepturi reiciendis quisquam. Modi, quisquam ipsam?",
    L2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea eius corporis animi rem eveniet nostrum temporibus facilis illum unde quia doloremque, sit itaque molestias, nihil expedita. Accusamus, sed quae!",
    L3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur ipsum inventore ullam id tempora soluta quidem! Ut iure debitis architecto sunt, corrupti explicabo! Cum fugit error voluptatem corrupti vero.",
}

document.getElementById('L1').innerHTML = me.L1
document.getElementById('L2').innerHTML = me.L2
document.getElementById('L3').innerHTML = me.L3
