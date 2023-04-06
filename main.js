AOS.init();



const iframe = document.getElementById('iframe');
const aTag = document.getElementById('iframeLink');
function link(num) {
    let iframeLink;

    if (num === 'one') {
        iframeLink = 'https://mr-mystery.github.io/hosting-demo/';
    }
    else if (num === 'two') {
        iframeLink = 'https://mr-mystery.github.io/personal-website/';
    }
    else if (num === 'three') {
        iframeLink = 'https://mr-mystery.github.io/P5-Game/';
    }
    else if (num === 'four') {
        iframeLink = 'https://mr-mystery.github.io/firebase-messages/';
    }
    else if (num === 'five') {
        iframeLink = 'https://mr-mystery.github.io/Random-Api/';
    }
    else if (num === 'six') {
        iframeLink = 'https://mr-mystery.github.io/test/';
    };
    
    iframe.setAttribute('src', iframeLink);
    aTag.setAttribute('href', iframeLink);
};

function linkdrop(elem) {
    let ev = elem.value;
    let iframeLink;

    if (ev === "APCSP") {
        iframeLink = "https://codehs.com/sandbox/saketbhanvadia/yourusernamecodehsme/embed/?display_mode=displayOnly&read_only=True&show_file_tree=False";
    }
    else if (ev === "adventure") {
        iframeLink = "https://trinket.io/embed/python/f92cf8aa76";
    }
    else if (ev === "cipher") {
        iframeLink = "https://trinket.io/embed/python/7ba700f158";
    }
    else if (ev === "turtle") {
        iframeLink = "https://trinket.io/embed/python/c3cef27e3d";
    };

    iframe.setAttribute('src', iframeLink);
    aTag.setAttribute('href', iframeLink);
    elem.value = ' ';
};



function CheckBox() {
    AboutMe = {
        label1: "About Me:",
        L1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, animi repellat! Saepe recusandae numquam eligendi praesentium dolorum cumque minima ipsum, obcaecati, a molestiae at, excepturi reiciendis quisquam. Modi, quisquam ipsam?",
        L2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea eius corporis animi rem eveniet nostrum temporibus facilis illum unde quia doloremque, sit itaque molestias, nihil expedita. Accusamus, sed quae!",
        L3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aspernatur ipsum inventore ullam id tempora soluta quidem! Ut iure debitis architecto sunt, corrupti explicabo! Cum fugit error voluptatem corrupti vero.",

        label2: "Super Secret Info:",
        LL1: "Super (More Info Coming Soon)",
        LL2: "Secret (More Info Coming Soon)",
        LL3: "Info (More Info Coming Soon)",
    };

    let label = document.getElementById('h1-label');
    let li1 = document.getElementById('L1');
    let li2 = document.getElementById('L2');
    let li3 = document.getElementById('L3');

    if (document.getElementById('my-box').checked == true) {
        label.innerHTML = AboutMe.label2;
        li1.innerHTML = AboutMe.LL1;
        li2.innerHTML = AboutMe.LL2;
        li3.innerHTML = AboutMe.LL3;
    } else {
        label.innerHTML = AboutMe.label1;
        li1.innerHTML = AboutMe.L1;
        li2.innerHTML = AboutMe.L2;
        li3.innerHTML = AboutMe.L3;
    };
};