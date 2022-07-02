var arr=["SSC","HSC","BA","BS","B.Com","B-Ed","BSc","BE","B-Arch","M-Ed","MS","MSc","ME","M.Phil","PhD"]

document.write("<h1>Qualifications: </h1>")

for (let i=0;i<arr.length;i++){
    document.write(i+1+") "+arr[i]+"<br>")
}