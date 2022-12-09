export default function randomNunber(min, max) {
    return Math.floor(Math.random()* (max - min + 1) + min)
  }