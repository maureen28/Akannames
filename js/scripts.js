var date=parseInt(document.findElementbyId(date).value)
var month=parseInt(document.findElementbyId(month).value)
var year=parseInt(document.findElementbyId(year).value)
var gender=parseInt(document.findElementbyId(gender).value)

var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
var femaleNames=['Akosua','Adwoa','Abenna','Akua','Yaa','Afua','Ama']
var day=Math.trunc(parseInt((-(((year/4)-2*year-1)+((5*year/4))+((26*(month+1)/10))+date))%7));

/*var date=document.getElementById('date').value;
var month=document.getElementById('month').value;
var year=document.getElementById('year').value;
var gender=document.getElementById('gender').value;*/

if (gender==1){
 alert (maleNames[day])
}else{
alert("Your Akan name is")
}
if (gender==2){
 alert (femaleNames[day])
}else{
alert("Your akan name is")
}


