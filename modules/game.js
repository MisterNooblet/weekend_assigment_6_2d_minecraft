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
const invblocks = document.querySelectorAll('.control-shadow')
//Inventory listeners
leavesAmt.addEventListener('click', (e) => {
    resetTools()
    if (inventory.leaves > 0) {
        e.target.classList.add('control-active')
    }
    setTool('leaves')
})
grassAmt.addEventListener('click', (e) => {
    resetTools()
    if (inventory.grass > 0) {
        e.target.classList.add('control-active')
    }
    setTool('grass')
})
treeAmt.addEventListener('click', (e) => {
    resetTools()
    if (inventory.tree > 0) {
        e.target.classList.add('control-active')
    }
    setTool('tree')
})
stoneAmt.addEventListener('click', (e) => {
    resetTools()
    if (inventory.stone > 0) {
        e.target.classList.add('control-active')
    }
    setTool('stone')
})
coalAmt.addEventListener('click', (e) => {
    resetTools()
    if (inventory.coal > 0) {
        e.target.classList.add('control-active')
    }
    setTool('coal')
})
rubyAmt.addEventListener('click', (e) => {
    resetTools()
    if (inventory.ruby > 0) {
        e.target.classList.add('control-active')
    }
    setTool('ruby')
})
diamondAmt.addEventListener('click', (e) => {
    resetTools()
    if (inventory.diamond > 0) {
        e.target.classList.add('control-active')
    }
    setTool('diamond')
})
pickaxe.addEventListener('click', (e) => {
    resetTools()
    e.target.classList.add('control-active')

    setTool('pickaxe')
})
hatchet.addEventListener('click', (e) => {
    resetTools()
    e.target.classList.add('control-active')
    setTool('hatchet')
})
shovel.addEventListener('click', (e) => {
    resetTools()
    e.target.classList.add('control-active')
    setTool('shovel')
})

function setTool(tool) {
    inventory.currentTool = tool;
}

//functions
export function clickTile(e) {
    let tool = inventory.currentTool;
    let classList = e.target.classList
    if (classList.contains('leaves') && tool === 'hatchet') {
        classList.remove('leaves')
        classList.add('sky')
        inventory.leaves += 1
    } else if (classList.contains('ruby') && tool === 'pickaxe') {
        classList.remove('ruby')
        classList.add('sky')
        inventory.ruby += 1
    } else if (classList.contains('diamond') && tool === 'pickaxe') {
        classList.remove('diamond')
        classList.add('sky')
        inventory.diamond += 1
    } else if (classList.contains('coal') && tool === 'pickaxe') {
        classList.remove('coal')
        classList.add('sky')
        inventory.coal += 1
    } else if (classList.contains('tree') && tool === 'hatchet') {
        classList.remove('tree')
        classList.add('sky')
        inventory.tree += 1
    } else if (classList.contains('grass') && tool === 'shovel') {
        classList.remove('grass')
        classList.add('sky')
        inventory.grass += 1
    } else if (classList.contains('stone') && tool === 'pickaxe') {
        classList.remove('stone')
        classList.add('sky')
        inventory.stone += 1
    } else if (classList.contains('sky')) {
        layTile(e)
    }
    updateUI()
}

function layTile(e) {
    let classList = e.target.classList
    let currentTool = inventory.currentTool
    if (currentTool === 'leaves' && inventory.leaves > 0) {
        classList.add('leaves')
        classList.remove('sky')
        inventory.leaves--

    } else if (currentTool === 'ruby' && inventory.ruby > 0) {
        classList.add('ruby')
        classList.remove('sky')
        inventory.ruby--

    } else if (currentTool === 'diamond' && inventory.diamond > 0) {
        classList.add('diamond')
        classList.remove('sky')
        inventory.diamond--

    } else if (currentTool === 'coal' && inventory.coal > 0) {
        classList.add('coal')
        classList.remove('sky')
        inventory.coal--

    } else if (currentTool === 'grass' && inventory.grass > 0) {
        classList.add('grass')
        classList.remove('sky')
        inventory.grass--

    } else if (currentTool === 'tree' && inventory.tree > 0) {
        classList.add('tree')
        classList.remove('sky')
        inventory.tree--

    } else if (currentTool === 'stone' && inventory.stone > 0) {
        classList.add('stone')
        classList.remove('sky')
        inventory.stone--

    }
}

function resetTools() {
    invblocks.forEach(element => {
        element.classList.remove('control-active')
    })
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