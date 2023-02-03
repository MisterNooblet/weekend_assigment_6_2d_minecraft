import { clickTile, resetBtn, restartBtn } from "./game.js";

let matrixBoard = JSON.parse(localStorage.getItem('map'));
export let inventory = JSON.parse(localStorage.getItem('inv'));
const grid = document.querySelector('#gamegrid')
const rocks = document.querySelector('#rocksSound')
export function buildPlayerBoard() {
    rocks.play()
    let tileDelay = 0
    grid.style.gridTemplateRows = `repeat(${matrixBoard.length},1fr)`
    grid.style.gridTemplateColumns = `repeat(${matrixBoard[0].length},1fr)`
    matrixBoard.forEach((rows, ridx) => {
        rows.forEach((col, cidx) => {
            let tile = document.createElement('div')
            tile.classList.add('tile')
            switch (col) {
                case 'leaves':
                    tile.classList.add('leaves')
                    break;
                case 'ruby':
                    tile.classList.add('ruby')
                    break;
                case 'diamond':
                    tile.classList.add('diamond')
                    break;
                case 'coal':
                    tile.classList.add('coal')
                    break;
                case 'tree':
                    tile.classList.add('tree')
                    break;
                case 'grass':
                    tile.classList.add('grass')
                    break;
                case 'stone':
                    tile.classList.add('stone')
                    break;
                case 'sky':
                    tile.classList.add('sky')
                    break;
                default:
                    break;
            }
            tileDelay += 10
            setTimeout(() => {
                grid.appendChild(tile)
                tile.classList.add('bounce')
                tile.id = `x${ridx}x${cidx}`
                tile.addEventListener('click', (e) => {
                    clickTile(e)
                })

            }, tileDelay)
        })
    })
    setTimeout(() => {
        rocks.pause()
        restartBtn.classList.remove('hidden')
        resetBtn.disabled = false
    }, tileDelay)
}