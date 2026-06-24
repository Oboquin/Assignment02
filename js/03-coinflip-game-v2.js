let coinFlip
let times = parseInt(prompt('How many times to flip?'))

for (let i = 1; i <= times; i++) {
    coinFlip = Math.round(Math.random())
    if (coinFlip === 0) {
        console.log('Heads')
} else {
    console.log('Tails')
}
}