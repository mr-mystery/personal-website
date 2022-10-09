let anchor = document.getElementById('anchor')
let rekt = anchor.getBoundingClientRect()
let anchorX = (rekt.left + rekt.width)/2
let anchorY = (rekt.top + rekt.height)/2

document.addEventListener("mousemove", (e) => {
    // console.log(e)

    let mouseX = e.clientX
    let mouseY = e.clientY

    let angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

    let eyes = document.querySelectorAll(".eye")
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`
        anchor.style.filter = `hue-rotate(${angleDeg}deg)`
    })
})

function angle(cx, cy, ex, ey) {
    // let dy = ey - cy
    // let dx = ex - cx
    // let rad = Math.atan2(dy, dx)
    // let deg = rad * 180 / Math.PI
    // return deg
    return (Math.atan2((ey - cy), (ex - cx))) * 180 / Math.PI
}