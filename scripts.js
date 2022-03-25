// declarations
let mouseD = false;
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipBtn = player.querySelectorAll('[data-skip]')
const range = player.querySelectorAll('.player__slider')
// functions

function togglePlay() {
    if (video.paused) {
        video.play()
    } else video.pause()
}

function updateBtn() {
    // if (video.paused) {
    //     toggle.textContent = '⏸︎'
    // } else toggle.textContent = '▶'
    const icon = video.paused ? '▶' : '⏸︎'
    toggle.textContent = icon
}

function skipVid() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
    video[this.name] = this.value
}

function handleUpdate() {
    const percent = (video.currentTime / video.duration) * 100
    // console.log(percent);
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const position = video.duration * (e.offsetX / progress.offsetWidth)
    video.currentTime = position
}

// event listeners
toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('pause', updateBtn)
video.addEventListener('play', updateBtn)
video.addEventListener('timeupdate', handleUpdate)
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', ()=>{
    if (mouseD) {
        scrub
    }
})
progress.addEventListener('mousedown', () => mouseD = true)
progress.addEventListener('mouseup', () => mouseD = false)
skipBtn.forEach(btn => {
    btn.addEventListener('click', skipVid)
})

range.forEach(rang => {
    rang.addEventListener('change', rangeUpdate)
})