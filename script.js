/*hide the alert display*/
/* this will hide the alert display before we submit the date to the form */

document.getElementById("alert1").style.display = "none";
document.getElementById("alert2").style.display = "none";



/*declare an array for Akan names*/
/* Const used because the names and days of the weeks will be the same*/

const femaleAkanNames = [	"Akosua,=",  "Adwoa,",	"Abenaa,", 	"Akua,",	"Yaa,", "Afua,",  "Ama," ];
const maleAkanNames   = [	"Kwasi,",   "Kwadwo,",  "Kwabena,",	  "Kwaku,",	  "Yaw,",	 "Kofi,",	"Kwame,",];
const daysWeek        = [  "Sunday",  "Monday",	"Tuesday",	"Wednesday",	"Thursday",	  "Friday", "Saturday" ];



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

