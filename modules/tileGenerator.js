let result = []

function fillArray(width, height) {
    for (let i = 0; i < height; i++) {
        let zeroArr = new Array(width).fill(0)
        result.push(zeroArr)

    }
    return result
}

fillArray(15, 10)





function generateArray(width, height) {
    let maxTrees = Math.floor(width * 0.3) - 2
    let currentLayer = 4
    for (let row = 0; row < height; row++) {

        for (let col = 0; col < width; col++) {
            if (row < height * 0.2) {
                result[row][col] = 'sky'

            } else if (row < height * 0.4) {
                currentLayer = 3
                let roll = Math.floor(Math.random() * 16) + 1
                if (result[row][col] == 0 && roll < 8 && currentLayer == 3 && maxTrees > 0) {
                    result[row][col] = 'leaves'
                    result[row][col + 1] = 'leaves'
                    result[row][col + 2] = 'leaves'
                    maxTrees--
                }
                else if (result[row - 1][col] === 'leaves' && result[row][col] == 0) {
                    result[row][col] = 'leaves'
                    result[row][col + 1] = 'leaves'
                    result[row][col + 2] = 'leaves'
                } else if (result[row][col] == 0) {
                    result[row][col] = 'sky'
                }
            } else if (row < height * 0.7) {
                if (result[row - 1][col + 1] === 'leaves' && result[row][col] == 0) {
                    result[row][col] = 'sky'
                    result[row][col + 1] = 'sky'
                    result[row][col + 2] = 'tree'
                } else if (result[row - 1][col + 1] === 'tree' && result[row][col] == 0) {
                    result[row][col] = 'sky'
                    result[row][col + 1] = 'tree'
                    result[row][col + 2] = 'sky'
                } else if (result[row][col] === 0) {
                    result[row][col] = 'sky'
                }
            } else if (row < height * 1) {
                let roll2 = Math.floor(Math.random() * 4) + 1
                if (result[row - 1][col] === 'sky' && result[row][col] == 0) {
                    result[row].fill('grass')
                } else if (result[row][col] == 0) {
                    switch (roll2) {
                        case 1:
                            result[row][col] = 'diamond'
                            break;
                        case 2:
                            result[row][col] = 'stone'
                            break;
                        case 3:
                            result[row][col] = 'coal'
                            break;
                        case 4:
                            result[row][col] = 'ruby'
                            break;

                        default:
                            break;
                    }

                }
            }

        }
    }
    return result;
}




console.log(generateArray(15, 10))