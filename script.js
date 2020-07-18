/*------------------------------------------------------------------------------------------------------------------------------------------------- */


/*hide the alert display*/
/* this will hide the alert display before we submit the date to the form */

document.getElementById("alert1").style.display = "none";
document.getElementById("alert2").style.display = "none";


/*------------------------------------------------------------------------------------------------------------------------------------------------- */


/*declare an array for Akan names*/
/* Const used because the names and days of the weeks will be the same*/

const femaleAkanNames = ["Akosua,=",  "Adwoa,",	"Abenaa,", 	"Akua,",	"Yaa,", "Afua,",  "Ama," ];
const maleAkanNames   = ["Kwasi,",   "Kwadwo,",  "Kwabena,",	  "Kwaku,",	  "Yaw,",	 "Kofi,",	"Kwame,",];
const daysWeek        = ["Sunday",  "Monday",	"Tuesday",	"Wednesday",	"Thursday",	  "Friday", "Saturday" ];

/*------------------------------------------------------------------------------------------------------------------------------------------------- */


/*invoking function*/
/*summoning on the function like we summon on the Gods*/

function getAkanName() {

    //variable (date collection & integer conversion)
    /*year, month & day is pare a string and will be converted to an integer*/ 
    
    var year = parseInt (document.getElementById ("year") .value);
    var month = parseInt (document.getElementById("month").value);
    var day = parseInt (document.getElementById("day").value);
    var male = document.getElementById(male);
    var female = document.getElementById(female);

/*------------------------------------------------------------------------------------------------------------------------------------------------- */

/*correct day controller*/
/*sets a limit for the 1-31 days in a month*/

if (day <= 0 || day >= 32) {
    alert(
        "please input a valid date"
    );
}

/*correct month controller*/
/*sets a limit for the 1-12 Months in a year*/

if (month <= 0 || month >= 13) {
    alert(
        "Please input a valid month"
    );
}

/*------------------------------------------------------------------------------------------------------------------------------------------------- */

/*Simple date property*/
/*A date constructor*/
	var day = new Date(year + "/" + month + "/" + day);

	
/*get date of birth conditional statement*/
/*this will collect the submitted info to display your Akan name*/

/*For the male*/
	var dateOfBirth = day.getDay();
	if (male.checked == true) {
		document.getElementById("alert1").style.display = "block";
		document.getElementById("span1").innerHTML = "You're born on, " + daysWeek[dateOfBirth];
		document.getElementById("span2").innerHTML = "Akan Name is " + maleAkanNames[dateOfBirth];

/*For the female*/

	} else if (female.checked == true) {
		document.getElementById("alert1").style.display = "block";
		document.getElementById("span1").innerHTML = "You're born on, " + daysWeek[dateOfBirth];
		document.getElementById("span2").innerHTML = "Akan Name is " + femaleAkanNames[dateOfBirth];
	}
}

/*------------------------------------------------------------------------------------------------------------------------------------------------- */

/*reload page from reset button*/
/*This refreshes the page on the click of the reset button on home page*/

function refreshPage() {
	window.location.reload();
}

/*------------------------------------------------------------------------------------------------------------------------------------------------- */
