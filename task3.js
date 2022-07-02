var color=[]

color.unshift(prompt("A) Which color you want to add to the beginning ?"))
console.log("Colors:",color)

color.push(prompt("B) Which color you want to add to the end ?"))
console.log("Colors:",color)

color.unshift(prompt("C) Add one color to the beginning of an array"))
color.unshift(prompt("C) Add another color to the beginning of an array"))
console.log("Colors:",color)

alert("D) The First Color from an Array ("+color[0]+") would be delete.")
color.shift()
console.log("Colors:",color)

alert("E) The Last Color from an Array ("+color[color.length-1]+") would be delete.")
color.pop()
console.log("Colors:",color)

color.splice(parseInt(prompt("F) At which index you want to add a color ?")),0,prompt("F) Which color you want to add ?"))
console.log("Colors:",color)

color.splice(parseInt(prompt("G) At which index you want to delete a color ?")),parseInt(prompt("G) How many colors you want to delete ?")))
console.log("Colors:",color)