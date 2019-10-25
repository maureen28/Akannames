var date=parseInt(prompt("Enter date of birth?"))
var month=parseInt(prompt("Enter month of birth?"))
var year=parseInt(prompt("Enter year of birth?"))
var century=parseInt(prompt("Enter year of birth?"))

var date=document.getElementById('date').value;
var month=document.getElementById('month').value;
var year=document.getElementById('year').value;

var day=(century/4)-2*century-1)+((5*year/4)+((26*(month+1)/10))+date)%7
var maleNames=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
var femaleNames=['Akosua','Adwoa','Abenna','Akua','Yaa','Afua','Ama']

    }