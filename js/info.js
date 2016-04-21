var showMainList = function() {
	$(".ul-2").slideDown();
};

var showWCFix = function() {
	$("#wc-fix-list").slideDown();
}

var showWWCFix = function() {
	$("#wwc-fix-list").slideDown();
}

var hideMainList = function() {
	$(".ul-2").slideUp();
}

var hideWCFix = function() {
	$("#wc-fix-list").slideUp();
}

var hideWWCFix = function() {
	$("#wwc-fix-list").slideUp();
}

var fixtures = new Waypoint({
	element: document.getElementById('fixtures'),
	handler: function(direction) {
		if (direction == "down") {
			showMainList();
		}	
	}
})

var wcfixtures = new Waypoint({
  element: document.getElementById('wc-fixtures'),
  handler: function(direction) {
    if (direction == "down") {
    	showWCFix();
    } else if (direction == "up") {
    	hideWCFix();
    }
  }
});

var wwcfixtures = new Waypoint({
  element: document.getElementById('wwc-fixtures'),
  handler: function(direction) {
    if (direction == "down") {
    	showWWCFix();
    } else if (direction == "up") {
    	hideWWCFix();
    }
  }
});

var field1 = "Field 1 - Morty";
var field2 = "Field 2 - Chicago Fire";
var field3 = "Field 3 - WOB";
var field4 = "Field 4 - Norris";
var field5 = "Field 5 - Kind";
var field6 = "Field 6 - Intl. Office";

var groups = 	[
					["#group-a", 
						[field1, "April 22, 5:30 PM", "Cayman Islands", "ky", "Puerto Rico", "pr", "-:-"],
						[field2, "April 22, 5:30 PM", "Sudan", "sd", "Turkey", "tr", "-:-"],
						[field5, "April 22, 7:45 PM", "Cayman Islands", "ky", "Turkey", "tr", "-:-"],
						[field6, "April 22, 7:45 PM", "Sudan", "sd", "Puerto Rico", "pr", "-:-"],
						[field1, "April 23, 8:30 AM", "Sudan", "sd", "Cayman Islands", "ky", "-:-"],
						[field2, "April 23, 8:30 AM", "Puerto Rico", "pr", "Turkey", "tr", "-:-"]],
					["#group-b", 
						[field3, "April 22, 5:30 PM", "India", "in", "Thailand", "th", "-:-"],
						[field1, "April 22, 6:15 PM", "Vietnam", "vn", "Spain", "es", "-:-"],
						[field5, "April 22, 8:30 PM", "India", "in", "Vietnam", "vn", "-:-"],
						[field6, "April 22, 8:30 PM", "Thailand", "th", "Spain", "es", "-:-"],
						[field3, "April 23, 8:30 AM", "India", "in", "Spain", "es", "-:-"],
						[field4, "April 23, 8:30 AM", "Vietnam", "vn", "Thailand", "th", "-:-"]],
					["#group-c", 
						[field2, "April 22, 6:15 PM", "Ivory Coast", "ci", "Iceland", "is", "-:-"],
						[field3, "April 22, 6:15 PM", "Iran", "ir", "Italy", "it", "-:-"],
						[field4, "April 22, 8:30 PM", "Ivory Coast", "ci", "Iran", "ir", "-:-"],
						[field3, "April 22, 9:15 PM", "Iceland", "is", "Italy", "it", "-:-"],
						[field5, "April 23, 8:30 AM", "Ivory Coast", "ci", "Italy", "it", "-:-"],
						[field6, "April 23, 8:30 AM", "Iran", "ir", "Iceland", "is", "-:-"]],
					["#group-d",
						[field4, "April 22, 6:15 PM", "Nigeria", "ng", "San Marino", "sm", "-:-"],
						[field5, "April 22, 6:15 PM", "United States", "us", "South Korea", "kr", "-:-"],
						[field1, "April 22, 8:30 PM", "Nigeria", "ng", "United States", "us", "-:-"],
						[field2, "April 22, 8:30 PM", "San Marino", "sm", "South Korea", "kr", "-:-"],
						[field5, "April 23, 9:15 AM", "United States", "us", "San Marino", "sm", "-:-"],
						[field4, "April 23, 9:15 AM", "Nigeria", "ng", "South Korea", "kr", "-:-"]],
					["#group-e",
						[field6, "April 22, 6:15 PM", "Pakistan", "pk", "Wales", "gb-wls", "-:-"],
						[field6, "April 22, 7:00 PM", "Denmark", "dk", "England", "gb-eng", "-:-"],
						[field3, "April 22, 8:30 PM", "Pakistan", "pk", "Denmark", "dk", "-:-"],
						[field1, "April 22, 9:15 PM", "Wales", "gb-wls", "England", "gb-eng", "-:-"],
						[field1, "April 23, 10:00 AM", "Pakistan", "pk", "England", "gb-eng", "-:-"],
						[field2, "April 23, 10:00 AM", "Wales", "gb-wls", "Denmark", "dk", "-:-"]],
					["#group-f",
						[field4, "April 22, 7:00 PM", "Bahamas", "bs", "Hong Kong", "hk", "-:-"],
						[field5, "April 22, 7:00 PM", "Argentina", "ar", "Peru", "pe", "-:-"],
						[field2, "April 22, 9:15 PM", "Argentina", "ar", "Bahamas", "bs", "-:-"],
						[field2, "April 22, 10:00 PM", "Peru", "pe", "Hong Kong", "hk", "-:-"],
						[field3, "April 23, 10:00 AM", "Argentina", "ar", "Hong Kong", "hk", "-:-"],
						[field4, "April 23, 10:00 AM", "Bahamas", "bs", "Peru", "pe", "-:-"]],
					["#group-g",
						[field1, "April 22, 7:45 PM", "Chile", "cl", "Brazil", "br", "-:-"],
						[field2, "April 22, 7:45 PM", "France", "fr", "China", "cn", "-:-"],
						[field4, "April 22, 10:00 PM", "Chile", "cl", "France", "fr", "-:-"],
						[field5, "April 22, 10:00 PM", "Brazil", "br", "China", "cn", "-:-"],
						[field4, "April 23, 10:45 AM", "Chile", "cl", "China", "cn", "-:-"],
						[field5, "April 23, 10:45 AM", "France", "fr", "Brazil", "br", "-:-"]],
					["#group-h", 
						[field3, "April 22, 7:45 PM", "Colombia", "co", "Solomon Islands", "sb", "-:-"],
						[field4, "April 22, 7:45 PM", "Netherlands", "nl", "Kazakhstan", "kz", "-:-"],
						[field1, "April 22, 10:00 PM", "Colombia", "co", "Netherlands", "nl", "-:-"],
						[field3, "April 22, 10:00 PM", "Solomon Islands", "sb", "Kazakhstan", "kz", "-:-"],
						[field5, "April 23, 10:00 AM", "Colombia", "co", "Kazakhstan", "kz", "-:-"],
						[field6, "April 23, 10:00 AM", "Netherlands", "nl", "Solomon Islands", "sb", "-:-"]],
					["#group-a-w",
						[field4, "April 22, 5:30 PM", "Djibouti", "dj", "France", "fr", "-:-"],
						[field5, "April 22, 5:30 PM", "United States", "us", "Sweden", "se", "-:-"],
						[field6, "April 22, 5:30 PM", "Denmark", "dk", "Iceland", "is", "-:-"],
						[field1, "April 22, 7:00 PM", "Djibouti", "dj", "United States", "us", "-:-"],
						[field2, "April 22, 7:00 PM", "France", "fr", "Iceland", "is", "-:-"],
						[field3, "April 22, 7:00 PM", "Sweden", "se", "Denmark", "dk", "-:-"],
						[field4, "April 22, 9:15 PM", "Djibouti", "dj", "Sweden", "se", "-:-"],
						[field5, "April 22, 9:15 PM", "France", "fr", "Denmark", "dk", "-:-"],
						[field6, "April 22, 9:15 PM", "United States", "us", "Iceland", "is", "-:-"],
						[field1, "April 23, 9:15 AM", "Djibouti", "dj", "Denmark", "dk", "-:-"],
						[field2, "April 23, 9:15 AM", "France", "fr", "United States", "us", "-:-"],
						[field3, "April 23, 9:15 AM", "Sweden", "se", "Iceland", "is", "-:-"],
						[field1, "April 23, 10:45 AM", "Djibouti", "dj", "Iceland", "is", "-:-"],
						[field2, "April 23, 10:45 AM", "France", "fr", "Sweden", "se", "-:-"],
						[field3, "April 23, 10:45 AM", "United States", "us", "Denmark", "dk", "-:-"]]];

$(document).ready(function() {

	for (var i = 0; i < groups.length; i++) {
		console.log(groups[i]);
		for (var j = 1; j < groups[i].length; j++) {
			$(groups[i][0]).append("<div class=\"row fixture-row\"><div class=\"col-md-12\"><div class=\"col-md-2 col-xs-2 game-identifier\"><div class=\"row\"><div class=\"col-md-12\">" + groups[i][j][0] + "</div></div><div class=\"row\"><div class=\"col-md-12\">" + groups[i][j][1] + "</div></div></div><div class=\"col-md-4 col-xs-4 fixture-team\"><span class=\"flag-icon flag-icon-" + groups[i][j][3] + " flag-left\"></span>" + groups[i][j][2] + "</div><div class=\"col-md-2 col-xs-2 fixture-score\">" + groups[i][j][6] + "</div><div class=\"col-md-4 col-xs-4 fixture-team\">" + groups[i][j][4] + "<span class=\"flag-icon flag-icon-" + groups[i][j][5] + " flag-right\"></span></div></div></div>");
		}
	}

});