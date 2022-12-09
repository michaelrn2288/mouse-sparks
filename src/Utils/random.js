export function randomNumber(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min)
  }

export function fiftyPercentChanceTrue () {
    return randomNumber(0, 1) === 1 ? true : false
}