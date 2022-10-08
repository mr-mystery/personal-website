function Popup() {
    alert("Hello\nHow are you?");
    confirm("Press a button! (Cancl or Ok)")
    prompt("sometext","defaultText")
}

const buttonN = document.getElementById('note')
buttonN.addEventListener('click', () => {

    Notification.requestPermission().then(perm => {
        // alert(perm)
        
        if (perm === "granted") {
            const Notif = new Notification("Example Notification", {
                body: "Math.random() is cool! " + Math.random(),
                data: { hello: "world" },
                icon: "images/blue-thumbs-up-icon.png",
                image: "images/blue-thumbs-up-icon.png",
                // tag: "test",
            })

            Notif.addEventListener("click", e => {
                alert("CLICK!")
            })
        }
    })
})

// let Notif2
// let interval
// document.addEventListener("visibilitychange", () => {
//     if (document.visibilityState === "hidden") {
//         const leave = new Date()
//         interval = setInterval(() => {
//             Notif2 = new Notification("Come Back Pls", {
//                 body: `You have been gone for ${Math.round((new Date() - leave)/1000)}.`,
//                 tag: "comeback",
//             })
//         }, 1000)
//     }
//     else {
//         if (interval) clearInterval(interval)
//         if (Notif2) Notif2.close()
//     }
// })