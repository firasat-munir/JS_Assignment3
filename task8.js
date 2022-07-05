var a=[]
for(let i=1;i<16;i++){
    a[i-1]=i
}
document.write("a. Counting: "+a+"<br>")

var b=[]
for(let i=1;i<11;i++){
    b[10-i]=i
}
document.write("b. Reverse counting: "+b+"<br>")

var c=[]
for(let i=0;i<=20;i+=2){
    c[i]=i
}
document.write("c. Even: "+c.filter(Number)+"<br>")

var d=[]
for(let i=1;i<20;i+=2){
    d[i]=i
}
document.write("d. Odd: "+d.filter(Number)+"<br>")

var e=[]
for(let i=2;i<=20;i+=2){
    e[i]=i+"k"
}
document.write("e. Series: "+e.filter(Boolean))