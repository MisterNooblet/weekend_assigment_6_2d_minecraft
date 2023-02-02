import { buildPlayerBoard } from "./gridGenerator.js"

let matrixBoard = JSON.parse(localStorage.getItem('map'))
const grid = document.querySelector('#gamegrid')
buildPlayerBoard()