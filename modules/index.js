//////////////Load manager

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.display = "none";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        document.querySelector("#loader").style.display = "none";
        document.querySelector("body").style.display = "";
    }
};



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
            updateNums('left');
            break;
        case 'incWidth':
            if (width < 40) {
                width++
            }
            updateNums('left');
            break;
        case 'decHeight':
            if (height > 10) {
                height--
            }
            updateNums('right');
            break;
        case 'incHeight':
            if (height < 40) {
                height++
            }
            updateNums('right');
            break;
        default:
            break;
    }

}
function updateNums(side) {
    switch (side) {
        case 'left':
            widthEl.innerHTML = width
            widthEl.classList.toggle('jello')
            break;
        case 'right':
            heightEl.innerHTML = height
            heightEl.classList.toggle('jello')
            break;
        default:
            break;
    }
    setTimeout(() => {
        widthEl.classList.remove('jello')
        heightEl.classList.remove('jello')
    }, 500)

}



