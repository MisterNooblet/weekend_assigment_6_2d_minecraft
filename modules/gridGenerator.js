let matrixBoard = JSON.parse(localStorage.getItem('map'));

export function buildPlayerBoard() {
    matrixBoard.forEach(rows => {
        rows.forEach(col => {
            document.getElementById('#gamegrid').append("<div class= 'grid'></div>")
        })
    })
}