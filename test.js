const { object } = require("zod")

const data = [
  ["username", "hakym"],
  ["password", "blablabla"],
  ["age", "14"],
]

console.log(Object.fromEntries(data.entries()))