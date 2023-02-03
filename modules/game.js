//imports
import { buildPlayerBoard } from "./gridGenerator.js"
import { inventory } from "./gridGenerator.js"
//initialize board
buildPlayerBoard()
//dom elements
const leavesAmt = document.querySelector('#leaves-amt');
const grassAmt = document.querySelector('#grass-amt');
const treeAmt = document.querySelector('#tree-amt');
const stoneAmt = document.querySelector('#stone-amt');
const coalAmt = document.querySelector('#coal-amt');
const rubyAmt = document.querySelector('#ruby-amt');
const diamondAmt = document.querySelector('#diamond-amt');



//functions
export function clickTile(e) {
    if (e.target.classList.contains('leaves')) {
        e.target.classList.remove('leaves')
        e.target.classList.add('sky')
        inventory.leaves += 1
    } else if (e.target.classList.contains('ruby')) {
        e.target.classList.remove('ruby')
        e.target.classList.add('sky')
        inventory.ruby += 1
    } else if (e.target.classList.contains('diamond')) {
        e.target.classList.remove('diamond')
        e.target.classList.add('sky')
        inventory.diamond += 1
    } else if (e.target.classList.contains('coal')) {
        e.target.classList.remove('coal')
        e.target.classList.add('sky')
        inventory.coal += 1
    } else if (e.target.classList.contains('tree')) {
        e.target.classList.remove('tree')
        e.target.classList.add('sky')
        inventory.tree += 1
    } else if (e.target.classList.contains('grass')) {
        e.target.classList.remove('grass')
        e.target.classList.add('sky')
        inventory.grass += 1
    } else if (e.target.classList.contains('stone')) {
        e.target.classList.remove('stone')
        e.target.classList.add('sky')
        inventory.stone += 1
    }
    updateUI()
}

function updateUI() {
    leavesAmt.innerHTML = inventory.leaves
    grassAmt.innerHTML = inventory.grass
    treeAmt.innerHTML = inventory.tree
    stoneAmt.innerHTML = inventory.stone
    coalAmt.innerHTML = inventory.coal
    rubyAmt.innerHTML = inventory.ruby
    diamondAmt.innerHTML = inventory.diamond
}