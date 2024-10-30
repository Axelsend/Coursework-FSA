const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"]
myInstruments.splice (2,1)
myInstruments.unshift ("saxophone")
myInstruments.push ("tuba", "bassoon")


console.table(myInstruments)

function getFirstInstrument(instruments){
    return instruments[0]
}

function getLastInstrument(stuff){
    return stuff[stuff.length - 1]
}

console.log(getFirstInstrument(myInstruments))
console.log(getLastInstrument(myInstruments))

function getFirstandLastInstruments(stuff){
    let firstInstrument = getFirstInstrument(stuff)
    let lastInstrument = getLastInstrument(stuff)

    const newArray = [firstInstrument, lastInstrument]

    return newArray

}

console.table(getFirstandLastInstruments(myInstruments))

function getFirstThreeInstruments(stuff){
    return stuff.slice(0, 3)
}

console.log(getFirstThreeInstruments(myInstruments))