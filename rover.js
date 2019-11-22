// Rover Object Goes Here
// ======================
let rover = {
    direction: 'N',
    x: 0,
    y: 0,
    travelLog: []
}
// ======================
function turnLeft(rover) {
    console.log("Mars Rover,turnLeft")
    switch (rover.direction) {
        case 'N': rover.direction = 'W'
            break
        case 'W': rover.direction = 'S'
            break
        case 'S': rover.direction = 'E'
            break
        case 'E': rover.direction = 'N'
            break
    }
    console.log(`Mars Rover is facing ${rover.direction}`)

}

function turnRight(rover) {
    console.log("Mars Rover, turnRight")
    switch (rover.direction) {
        case 'N': rover.direction = 'E'
            break
        case 'E': rover.direction = 'S'
            break
        case 'S': rover.direction = 'W'
            break
        case 'W': rover.direction = 'N'
            break
    }
    console.log(`Mars Rover is facing ${rover.direction}`)
}

function moveForward() {
    console.log("Mars Rover,moveForward");
    switch (rover.direction) {
        case 'N': rover.y -= 1
            break
        case 'E': rover.x += 1
            break
        case 'S': rover.y += 1
            break
        case 'W': rover.x -= 1
            break
    }
    console.log(`Mars Rover is now in ${rover.x},${rover.y} on the grid.`)

}




/* Bonus 1*/
const tracking = (rover) => {
    if (rover.y < 0 && rover.direction === 'N') { console.log('Not continue North,return now') }

    if (rover.y > 9 && rover.direction === 'S') {
        console.log('Not continue South,return now')

    }

    if (rover.x < 0 && rover.direction === 'W') {
        console.log('Not continue West,return now')

    }

    if (rover.x > 9 && rover.direction === 'E') {
        console.log('Not continue East,return now')
    }
}
/* Bonus 2*/
function moveBackwards() {
    console.log("Mars Rover,moveBackwards")
    switch (rover.direction) {
        case 'N': rover.y += 1
            break
        case 'E': rover.x -= 1
            break
        case 'S': rover.y -= 1
            break
        case 'W': rover.x += 1
            break
    }
    console.log(`Mars Rover is now in ${rover.x},${rover.y} on the grid.`)

}
/* Bonus 3*/
let commandList = ''
const command = commandList => {
    for (let i = 0; i < commandList.length; i++) {
        switch (commandList[i]) {
            case 'f': moveForward(rover)
                break
            case 'b': moveBackwards(rover)
                break
            case 'r': turnRight(rover)
                break
            case 'l': turnLeft(rover)
                break
            default:
                console.log('Please enter a valid command')
        }
    }

}
command('r')
command('f')
command('f')
command('r')
command('f')
command('f')
command('l')
command('f')
command('r')
command('f')
command('f')


console.log(rover.direction)
console.log(rover.x, rover.y)
