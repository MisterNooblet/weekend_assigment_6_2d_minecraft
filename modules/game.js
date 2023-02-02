let matrixBoard = JSON.parse(localStorage.getItem('map'))
const grid = document.querySelector('#gamegrid')
function buildPlayerBoard() {
    grid.style.gridTemplateRows = `repeat(${matrixBoard.length},1fr)`
    grid.style.gridTemplateColumns = `repeat(${matrixBoard[0].length},1fr)`
    matrixBoard.forEach(rows => {
        rows.forEach(col => {
            console.log(col == 'leaves');
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
            grid.appendChild(tile)
        })
    })
}
buildPlayerBoard()