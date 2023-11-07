document.write("16. Descending order of THREE numbers."+"<br>")
document.write("--------------------------------------"+"<br>")
var a=5,b=500,c=50;
if((a>b)&& (a>c)){
    if(b>c){
        document.write(a,b,c+"<br>")
    }
    else{
        document.write(a,c,b+"<br>")
    }
}
else if((b>a)&& (b>c)){
if(a>c){
    document.write(b,a,c+"<br>")
}
else{
    document.write(b,c,a+"<br>")
}
}
else if((c>a) && (c>b)){
if(b>a){
document.write(c,b,a+"<br>")
}
else{
document.write(c,a,b+"<br>")
}
}
