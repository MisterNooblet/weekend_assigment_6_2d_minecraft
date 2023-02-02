//Variables
let height = 24;
let width = 24;

//sounds
const clickSound = document.querySelector('#clickSound');
//html elements
let arrows = document.querySelectorAll(".arrow");
let widthEl = document.querySelector('#Width');
let heightEl = document.querySelector('#Height')
let decWidth = document.querySelector('#decWidth')
let incWidth = document.querySelector('#incWidth')
let decHeight = document.querySelector('#decHeight')
let incHeight = document.querySelector('#incHeight')
//Event Listeners
arrows.forEach(element => {
    element.addEventListener('click', function (e) {
        clickSound.play()
    })
})

decWidth.addEventListener('click', () => {
    modSize('decWidth')
})
incWidth.addEventListener('click', () => {
    modSize('incWidth')
})
decHeight.addEventListener('click', () => {
    modSize('decHeight')
})
incHeight.addEventListener('click', () => {
    modSize('incHeight')
})


function modSize(params) {
    switch (params) {
        case 'decWidth':
            if (width > 10) {
                width--
            }
            break;
        case 'incWidth':
            if (width < 40) {
                width++
            }
            break;
        case 'decHeight':
            if (height > 10) {
                height--
            }
            break;
        case 'incHeight':
            if (height < 40) {
                height++
            }
            break;
        default:
            break;
    }
    updateNums();

}
function updateNums() {
    widthEl.innerHTML = width
    heightEl.innerHTML = height
}