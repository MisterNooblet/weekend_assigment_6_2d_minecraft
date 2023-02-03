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
const body = document.querySelector('body')
//Inventory listeners
leavesAmt.addEventListener('click', (e) => {
    if (inventory.leaves > 0) {
        resetTools()
        e.target.classList.add('control-active')
        body.style.cursor = `url('/assets/images/blocks/Cursors/leaves.cur') , auto`
        setTool('leaves')
    }
})
grassAmt.addEventListener('click', (e) => {
    if (inventory.grass > 0) {
        resetTools()
        body.style.cursor = `url('/assets/images/blocks/Cursors/grass.cur') , auto`
        e.target.classList.add('control-active')
        setTool('grass')
    }
})
treeAmt.addEventListener('click', (e) => {
    if (inventory.tree > 0) {
        resetTools()
        body.style.cursor = `url('/assets/images/blocks/Cursors/tree.cur') , auto`
        e.target.classList.add('control-active')
        setTool('tree')
    }
})
stoneAmt.addEventListener('click', (e) => {
    if (inventory.stone > 0) {
        resetTools()
        body.style.cursor = `url('/assets/images/blocks/Cursors/stone.cur') , auto`
        e.target.classList.add('control-active')
        setTool('stone')
    }
})
coalAmt.addEventListener('click', (e) => {
    if (inventory.coal > 0) {
        resetTools()
        body.style.cursor = `url('/assets/images/blocks/Cursors/coal.cur') , auto`
        e.target.classList.add('control-active')
        setTool('coal')
    }
})
rubyAmt.addEventListener('click', (e) => {
    if (inventory.ruby > 0) {
        resetTools()
        body.style.cursor = `url('/assets/images/blocks/Cursors/ruby.cur') , auto`
        e.target.classList.add('control-active')
        setTool('ruby')
    }
})
diamondAmt.addEventListener('click', (e) => {
    if (inventory.diamond > 0) {
        resetTools()
        body.style.cursor = `url('/assets/images/blocks/Cursors/diamond.cur') , auto`
        e.target.classList.add('control-active')
        setTool('diamond')
    }
})
pickaxe.addEventListener('click', (e) => {
    resetTools()
    body.style.cursor = `url('/assets/images/blocks/Cursors/pickaxe.cur') , auto`
    e.target.classList.add('control-active')
    setTool('pickaxe')
})
hatchet.addEventListener('click', (e) => {
    resetTools()
    body.style.cursor = `url('/assets/images/blocks/Cursors/hatchet.cur') , auto`
    e.target.classList.add('control-active')
    setTool('hatchet')
})
shovel.addEventListener('click', (e) => {
    resetTools()
    body.style.cursor = `url('/assets/images/blocks/Cursors/shovel.cur') , auto`
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
    let tileId = e.target.id.split('x')
    tileId[1]--
    let nextTileAbove = document.querySelector(`#${tileId.join('x')}`)
    console.log(nextTileAbove);
    console.log(tileId);
    console.log(e.target.get);
    if (classList.contains('leaves') && tool === 'hatchet' && nextTileAbove.classList.contains('sky')) {
        classList.remove('leaves')
        classList.add('sky')
        leavesAmt.classList.add('pulse')
        inventory.leaves += 1
    } else if (classList.contains('ruby') && tool === 'pickaxe' && nextTileAbove.classList.contains('sky')) {
        classList.remove('ruby')
        classList.add('sky')
        rubyAmt.classList.add('pulse')
        inventory.ruby += 1
    } else if (classList.contains('diamond') && tool === 'pickaxe' && nextTileAbove.classList.contains('sky')) {
        classList.remove('diamond')
        classList.add('sky')
        diamondAmt.classList.add('pulse')
        inventory.diamond += 1
    } else if (classList.contains('coal') && tool === 'pickaxe' && nextTileAbove.classList.contains('sky')) {
        classList.remove('coal')
        classList.add('sky')
        coalAmt.classList.add('pulse')
        inventory.coal += 1
    } else if (classList.contains('tree') && tool === 'hatchet' && nextTileAbove.classList.contains('sky')) {
        classList.remove('tree')
        classList.add('sky')
        treeAmt.classList.add('pulse')
        inventory.tree += 1
    } else if (classList.contains('grass') && tool === 'shovel' && nextTileAbove.classList.contains('sky')) {
        classList.remove('grass')
        classList.add('sky')
        grassAmt.classList.add('pulse')
        inventory.grass += 1
    } else if (classList.contains('stone') && tool === 'pickaxe' && nextTileAbove.classList.contains('sky')) {
        classList.remove('stone')
        classList.add('sky')
        stoneAmt.classList.add('pulse')
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
    invblocks.forEach(element => {
        setTimeout(() => { element.classList.remove('pulse') }, 500)
    })
    leavesAmt.innerHTML = inventory.leaves
    grassAmt.innerHTML = inventory.grass
    treeAmt.innerHTML = inventory.tree
    stoneAmt.innerHTML = inventory.stone
    coalAmt.innerHTML = inventory.coal
    rubyAmt.innerHTML = inventory.ruby
    diamondAmt.innerHTML = inventory.diamond
}