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
const pickaxe = document.querySelector('#pickaxe');
const hatchet = document.querySelector('#hatchet');
const shovel = document.querySelector('#shovel');
//Inventory listeners
leavesAmt.addEventListener('click', () => {
    setTool('leaves')
})
grassAmt.addEventListener('click', () => {
    setTool('grass')
})
treeAmt.addEventListener('click', () => {
    setTool('tree')
})
stoneAmt.addEventListener('click', () => {
    setTool('stone')
})
coalAmt.addEventListener('click', () => {
    setTool('coal')
})
rubyAmt.addEventListener('click', () => {
    setTool('ruby')
})
diamondAmt.addEventListener('click', () => {
    setTool('diamond')
})
pickaxe.addEventListener('click', () => {
    setTool('pickaxe')
})
hatchet.addEventListener('click', () => {
    setTool('hatchet')
})
shovel.addEventListener('click', () => {
    setTool('shovel')
})

function setTool(tool) {
    inventory.currentTool = tool;
}

//functions
export function clickTile(e) {
    let tool = inventory.currentTool;
    if (e.target.classList.contains('leaves') && tool === 'hatchet') {
        e.target.classList.remove('leaves')
        e.target.classList.add('sky')
        inventory.leaves += 1
    } else if (e.target.classList.contains('ruby') && tool === 'pickaxe') {
        e.target.classList.remove('ruby')
        e.target.classList.add('sky')
        inventory.ruby += 1
    } else if (e.target.classList.contains('diamond') && tool === 'pickaxe') {
        e.target.classList.remove('diamond')
        e.target.classList.add('sky')
        inventory.diamond += 1
    } else if (e.target.classList.contains('coal') && tool === 'pickaxe') {
        e.target.classList.remove('coal')
        e.target.classList.add('sky')
        inventory.coal += 1
    } else if (e.target.classList.contains('tree') && tool === 'hatchet') {
        e.target.classList.remove('tree')
        e.target.classList.add('sky')
        inventory.tree += 1
    } else if (e.target.classList.contains('grass') && tool === 'shovel') {
        e.target.classList.remove('grass')
        e.target.classList.add('sky')
        inventory.grass += 1
    } else if (e.target.classList.contains('stone') && tool === 'pickaxe') {
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