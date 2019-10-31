function x() {
    var daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    var femaleNames = ['Akosua', 'Adwoa', 'Abenna', 'Akua', 'Yaa', 'Afua', 'Ama']

    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var century = parseInt(document.getElementById("century").value);
    document.getElementById('rd1');
    document.getElementById('rd2');

    // if (submit.clicked == true)
    //     alert("Please enter details");
    if (century == "") {
        alert("Input the correct century");
    } else if (year == "") {
        alert("Input the correct year");
    } else if (month >= 12) {
        alert("Input the correct month");
    } else if (date >= 31) {
        alert("Input the correct date");
    }
    else {
        var day = Math.trunc(parseInt((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + date)) % 7);
    }

    if (rd1.checked == true) {
        alert("Twi:Maakaye were born on " + daysOfWeek[day] + " Your name is " + maleNames[day])

    }
    if (rd2.checked == true) {
        alert("Twi:Maakaye were born on " + daysOfWeek[day] + " Your name is " + femaleNames[day])

    }
}


