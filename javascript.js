var a = parseInt(prompt('Masukan Massa Zat Terlarut(Gram):'))
var b = parseInt(prompt('Masukan Massa Total Larutan (Gram):'))
var c = (a/b)*1/100

alert(`
RUMUS PERSEN MASSA
Massa Zat Terlarut=${a}
Massa Total Larutan=${b}
hasil=${c} %
`)

console.log(`
RUMUS PERSEN MASSA
Massa Zat Terlarut=${a}
Massa Total Larutan=${b}
hasil=${c} %
`)

document.write(`
RUMUS PERSEN MASSA
Massa Zat Terlarut=${a}
Massa Total Larutan=${b}
hasil=${c} %
`)
