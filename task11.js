var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var B = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?")
var index = A.indexOf(B);
console.log(A)
console.log(B)
console.log(index)

if (A.includes(B)){
    document.write(B+" is <b>available</b> at index "+index+" in our bakery")
}

else{
    document.write("We are sorry. "+B+" is <b>not available</b> in our bakery")
}