var name = prompt("write your name","your name");
document.getElementById("sname").innerHTML = (name);


var lname = prompt("write your Last Name", "your last name");
document.getElementById("fname").innerHTML = (lname);


var rollno = prompt("enter your roll no:","roll number");
document.getElementById("rno").innerHTML=(rollno);

var batchno = prompt("enter your batch no:","batch number");
document.getElementById("bno").innerHTML=(batchno);

var html = parseInt(prompt("enter your HTML percentage","enter percentage"));
document.getElementById("html").innerHTML=(html);

var css = parseInt(prompt("enter your CSS percentage", "enter percentage"));
document.getElementById("css").innerHTML=(css);

var js = parseInt(prompt("enter your JAVAscript percentage","enter perentage"));
document.getElementById("js").innerHTML=(js);

var add=(html+css+js);
var avg=(add/3);

// condition html

if(html>=90){
   document.getElementById('html').innerHTML=html + "%" +"  A+ grade";
}
else if(html>=80){
document.getElementById('html').innerHTML=html + "%" +"  A grade";
}
else if(html>=70){
    document.getElementById('html').innerHTML=html + "%" +"  B grade";
}
else if(html>=60){
    document.getElementById('html').innerHTML=html + "%" +"  C grade";
}

else if(html<60){
    document.getElementById('html').innerHTML=html + "%" + "  failed";
}
//condiotion  CSS
if(css>=90){
   document.getElementById('css').innerHTML=css + "%" +"  A+ grade";
}
else if(css>=80){
document.getElementById('css').innerHTML=css + "%" +"  A grade";
}
else if(css>=70){
    document.getElementById('css').innerHTML=css + "%" +"  B grade";
}
else if(css>=60){
    document.getElementById('css').innerHTML=css + "%" +"  C grade";
}

else if(css<60){
    document.getElementById('css').innerHTML=css + "%" + "  failed";
}
//condiotion  js
if(js>=90){
   document.getElementById('js').innerHTML=js + "%" +"  A+ grade";
}
else if(js>=80){
document.getElementById('js').innerHTML=js + "%" +"  A grade";
}
else if(js>=70){
    document.getElementById('js').innerHTML=js + "%" +"  B grade";
}
else if(js>=60){
   document.getElementById('js').innerHTML=js + "%" +"  C grade";
}
else if(js<60){
    document.getElementById('js').innerHTML=js+ "%" + "  failed";
}

//condiotion  avg

if(avg>=90){
   document.getElementById('avg').innerHTML=avg + "%" +"  A+ grade";
}
else if(avg>=80){
document.getElementById('avg').innerHTML=avg + "%" +"  A grade";
}
else if(avg>=70){
    document.getElementById('avg').innerHTML=avg + "%" +"  B grade";
}
else if(avg>=60){
   document.getElementById('avg').innerHTML=avg + "%" +"  C grade";
}
else if(avg<60){
    document.getElementById('avg').innerHTML=avg+ "%" + "  failed ";
}
