function checkForm()
{
var noerr = true ; //using a variable to determine whether an error message is displayed
var msg="Some errors on the form:<br>"; //Title for the error message

var fname = document.forms["contact"]["fname"].value;
//determine field fname var
var lname = document.forms["contact"]["lname"].value;
//determine field lname var
var dob = document.forms["contact"]["dob"].value;
//determine field dob var
var tel = document.forms["contact"]["tel"].value;
//determine field tel var
var date = document.forms["contact"]["date"].value;
//determine field date var
var email = document.forms["contact"]["email"].value;
//determine field email var

var tellen = document.forms["contact"]["tel"].value.length;
//determine field email var
var val_email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

var val_date = /^\d{1,2}\/\d{1,2}\/\d{4}$/;


	//name test		|| = OR 	== mean equal to
	if (fname == null //empty
	|| fname == "") //
	
	{
		msg+="Please enter a name<br>";
		noerr = false; //triggers error message
	}
	
	// last name test		|| = OR 	== mean equal to
	if (lname == null //empty
	|| lname == "") //
	
	{
		msg+="Please enter a Surname<br>";
		noerr = false; //triggers error message
	}
	
	// dob name test		|| = OR 	== mean equal to
	if (dob == null //empty
	|| dob == "")
	
	{
		msg+="Please enter a Date of Birth<br>";
		noerr = false; //triggers error message
	}
	
	// tel test		|| = OR 	== mean equal to
	if (tel == null //empty
	|| tel == ""
	|| tellen != 11) //does not equal to 
	
	{
		msg+="Please enter a number that is 11 digits long<br>";
		noerr = false; //triggers error message
	}
	
	// date test		|| = OR 	== mean equal to
	if (date == null //empty
	|| date == ""
	|| !val_date.test(date)) //
	
	{
		msg+="Please enter a date<br>";
		noerr = false; //triggers error message
	}
	
	// email test		|| = OR 	== mean equal to
	if (email == null //empty
	|| email == ""
	|| !val_email.test(email)) // test email against character set defined var val_email
	
	{
		msg+="Please enter a e-mail<br>";
		noerr = false; //triggers error message
	}
	
	if (!noerr) document.getElementById("errmsg").innerHTML=msg; // if noerr is false then it will 
	//display an error message
	return noerr;
}