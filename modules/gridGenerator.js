import { clickTile } from "./game.js";

let matrixBoard = JSON.parse(localStorage.getItem('map'));
export let inventory = {
    currentTool: 0,
    leaves: 0,
    ruby: 0,
    diamond: 0,
    coal: 0,
    tree: 0,
    grass: 0,
    stone: 0
}
const grid = document.querySelector('#gamegrid')
const rocks = document.querySelector('#rocksSound')
export function buildPlayerBoard() {
    rocks.play()
    let tileDelay = 0
    grid.style.gridTemplateRows = `repeat(${matrixBoard.length},1fr)`
    grid.style.gridTemplateColumns = `repeat(${matrixBoard[0].length},1fr)`
    matrixBoard.forEach(rows => {
        rows.forEach(col => {
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
                tile.addEventListener('click', (e) => {
                    clickTile(e)
                })

            }, tileDelay)
        })
    })
    setTimeout(() => { rocks.pause() }, tileDelay)
}