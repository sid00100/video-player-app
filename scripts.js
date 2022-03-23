// declarations

const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipBtn = player.querySelectorAll('[data-skip]')
const range = player.querySelectorAll('.player__slider')
console.log(video);
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
    console.log(icon);
    toggle.textContent = icon
}

function skipVid() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate() {
    video[this.name] = this.value
}

// event listeners
toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('pause', updateBtn)
video.addEventListener('play', updateBtn)
skipBtn.forEach(btn => {
    btn.addEventListener('click', skipVid)
})

range.forEach(rang => {
    rang.addEventListener('change', rangeUpdate)
})