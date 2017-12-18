//JavaScript Document
var type = "<p>" + navigator.appCodeName + "<br>"
+ navigator.appName + "<br>"
+ navigator.appVersion + "<br>"
+ navigator.userAgent + "<br>"
+ navigator.platform + "<br>"
+ navigator.cookieEnabled + "</p>"; // defining type

var agent = navigator.userAgent; //defining browser
	if (agent.indexOf("Firefox") >= 0) //searching for
	{
		image = '<img src="images/firefox.png" alt="Mozilla">';
	}
	
	else if (agent.indexOf("OPR") >= 0) //searching for
	{
		image = '<img src="images/opera.png" alt="Opera">';
	}
	
	else if (agent.indexOf("Chrome") >= 0) //searching for
	{
		image = '<img src="images/chrome.png" alt="Chrome">';
	}
	
	else if (agent.indexOf("MSIE") >= 0) //searching for
	{
		image = '<img src="images/IE.png" alt="MSIE">';
	}
	
	else if (agent.indexOf("Safari") >= 0) //searching for
	{
		image = '<img src="images/safari.png" alt="Safari">';
	}
	
	else {
	image = "Sorry you are using an unknown browser type";
	}