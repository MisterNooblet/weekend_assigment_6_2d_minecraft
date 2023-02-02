let matrixBoard = JSON.parse(localStorage.getItem('map'))
const grid = document.querySelector('#gamegrid')
function buildPlayerBoard() {
    grid.style.gridTemplateRows = `repeat(${matrixBoard.length},1fr)`
    grid.style.gridTemplateColumns = `repeat(${matrixBoard[0].length},1fr)`
    matrixBoard.forEach(rows => {
        rows.forEach(col => {
            let tile = document.createElement('div')
            grid.appendChild(tile)
        })
    })
}
buildPlayerBoard()