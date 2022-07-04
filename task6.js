var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];

for (let i=0;i<aCities.length-1;i++){
    for (let j=i+1;j<i+2;j++){
        var a=o[j]
        document.write(j+a)
    }
    var b=aCities[i]
    document.write(" choice is "+b+"<br>")
}