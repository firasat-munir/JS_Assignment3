var totalMarks=500
var names=[]
var marks=[]

for(let i=0;i<3;i++){
    names[i]=prompt("Enter the name of a person : ")
    marks[i]=parseInt(prompt("Enter the marks obtained by "+names[i]+" : (Max:500)"))
    percentage=marks[i]*100/totalMarks
    document.write("Score of "+names[i]+" is "+marks[i]+". Percentage: "+percentage+"% <br>")
}
console.log("List of Students : ",names)
console.log("Marks : ",marks)