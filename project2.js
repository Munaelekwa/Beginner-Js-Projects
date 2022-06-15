let lengthConverter = () => {
    const prompt = require("prompt-sync")()
    let length = prompt("Enter the length in km: ")
    let result = Number(length) * 0.6214
    let result2 = `${length}km equals ${result}miles`
    return result2
}

console.log(lengthConverter())