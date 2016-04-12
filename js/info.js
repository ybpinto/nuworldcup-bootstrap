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

var groups = 	[
					["#group-a", 
						["Field 1", "April 22, 5:30 PM", "Cayman Islands", "ky", "Puerto Rico", "pr", "-:-"],
						["Field 2", "April 22, 5:30 PM", "Sudan", "sd", "Turkey", "tr", "-:-"],
						["Field 5", "April 22, 7:45 PM", "Cayman Islands", "ky", "Turkey", "tr", "-:-"],
						["Field 6", "April 22, 7:45 PM", "Sudan", "sd", "Puerto Rico", "pr", "-:-"],
						["Field 1", "April 23, 8:30 AM", "Sudan", "sd", "Cayman Islands", "ky", "-:-"],
						["Field 2", "April 23, 8:30 AM", "Puerto Rico", "pr", "Turkey", "tr", "-:-"]],
					["#group-b", 
						["Field 3", "April 22, 5:30 PM", "India", "in", "Thailand", "th", "-:-"],
						["Field 1", "April 22, 6:15 PM", "Vietnam", "vn", "Spain", "es", "-:-"],
						["Field 5", "April 22, 8:30 PM", "India", "in", "Vietnam", "vn", "-:-"],
						["Field 6", "April 22, 8:30 PM", "Thailand", "th", "Spain", "es", "-:-"],
						["Field 3", "April 23, 8:30 AM", "India", "in", "Spain", "es", "-:-"],
						["Field 4", "April 23, 8:30 AM", "Vietnam", "vn", "Thailand", "th", "-:-"]],
					["#group-c", 
						["Field 2", "April 22, 6:15 PM", "Ivory Coast", "ci", "Iceland", "is", "-:-"],
						["Field 3", "April 22, 6:15 PM", "Iran", "ir", "Italy", "it", "-:-"],
						["Field 4", "April 22, 8:30 PM", "Ivory Coast", "ci", "Iran", "ir", "-:-"],
						["Field 3", "April 22, 9:15 PM", "Iceland", "is", "Italy", "it", "-:-"],
						["Field 5", "April 23, 8:30 AM", "Ivory Coast", "ci", "Italy", "it", "-:-"],
						["Field 6", "April 23, 8:30 AM", "Iran", "ir", "Iceland", "is", "-:-"]],
					["#group-d",
						["Field 4", "April 22, 6:15 PM", "Nigeria", "ng", "San Marino", "sm", "-:-"],
						["Field 5", "April 22, 6:15 PM", "United States", "us", "South Korea", "kr", "-:-"],
						["Field 1", "April 22, 8:30 PM", "Nigeria", "ng", "United States", "us", "-:-"],
						["Field 2", "April 22, 8:30 PM", "San Marino", "sm", "South Korea", "kr", "-:-"],
						["Field 5", "April 23, 9:15 AM", "United States", "us", "San Marino", "sm", "-:-"],
						["Field 4", "April 23, 9:15 AM", "Nigeria", "ng", "South Korea", "kr", "-:-"]],
					["#group-e",
						["Field 6", "April 22, 6:15 PM", "Pakistan", "pk", "Denmark", "dk", "-:-"],
						["Field 6", "April 22, 7:00 PM", "Wales", "gb-wls", "England", "gb-eng", "-:-"],
						["Field 3", "April 22, 8:30 PM", "Pakistan", "pk", "Wales", "gb-wls", "-:-"],
						["Field 1", "April 22, 9:15 PM", "Denmark", "dk", "England", "gb-eng", "-:-"],
						["Field 1", "April 23, 10:00 AM", "Pakistan", "pk", "England", "gb-eng", "-:-"],
						["Field 2", "April 23, 10:00 AM", "Wales", "gb-wls", "Denmark", "dk", "-:-"]],
					["#group-f",
						["Field 4", "April 22, 7:00 PM", "Bahamas", "bs", "Hong Kong", "hk", "-:-"],
						["Field 5", "April 22, 7:00 PM", "Argentina", "ar", "Peru", "pe", "-:-"],
						["Field 2", "April 22, 9:15 PM", "Argentina", "ar", "Bahamas", "bs", "-:-"],
						["Field 2", "April 22, 10:00 PM", "Peru", "pe", "Hong Kong", "hk", "-:-"],
						["Field 3", "April 23, 10:00 AM", "Argentina", "ar", "Hong Kong", "hk", "-:-"],
						["Field 4", "April 23, 10:00 AM", "Bahamas", "bs", "Peru", "pe", "-:-"]],
					["#group-g",
						["Field 1", "April 22, 7:45 PM", "Chile", "cl", "Brazil", "br", "-:-"],
						["Field 2", "April 22, 7:45 PM", "France", "fr", "China", "cn", "-:-"],
						["Field 4", "April 22, 10:00 PM", "Chile", "cl", "France", "fr", "-:-"],
						["Field 5", "April 22, 10:00 PM", "Brazil", "br", "China", "cn", "-:-"],
						["Field 4", "April 23, 10:45 AM", "Chile", "cl", "China", "cn", "-:-"],
						["Field 5", "April 23, 10:45 AM", "France", "fr", "Brazil", "br", "-:-"]],
					["#group-h", 
						["Field 3", "April 22, 7:45 PM", "Colombia", "co", "Solomon Islands", "sb", "-:-"],
						["Field 4", "April 22, 7:45 PM", "Netherlands", "nl", "Kazakhstan", "kz", "-:-"],
						["Field 1", "April 22, 10:45 PM", "Colombia", "co", "Netherlands", "nl", "-:-"],
						["Field 3", "April 22, 10:45 PM", "Solomon Islands", "sb", "Kazakhstan", "kz", "-:-"],
						["Field 5", "April 23, 10:00 AM", "Colombia", "co", "Kazakhstan", "kz", "-:-"],
						["Field 6", "April 23, 10:00 AM", "Netherlands", "nl", "Solomon Islands", "sb", "-:-"]],
					["#group-a-w",
						["Field 4", "April 22, 5:30 PM", "Djibouti", "dj", "France", "fr", "-:-"],
						["Field 5", "April 22, 5:30 PM", "United States", "us", "Sweden", "se", "-:-"],
						["Field 6", "April 22, 5:30 PM", "Denmark", "dk", "Iceland", "is", "-:-"],
						["Field 1", "April 22, 7:00 PM", "Djibouti", "dj", "United States", "us", "-:-"],
						["Field 2", "April 22, 7:00 PM", "France", "fr", "Iceland", "is", "-:-"],
						["Field 3", "April 22, 7:00 PM", "Sweden", "se", "Denmark", "dk", "-:-"],
						["Field 4", "April 22, 9:15 PM", "Djibouti", "dj", "Sweden", "se", "-:-"],
						["Field 5", "April 22, 9:15 PM", "France", "fr", "Denmark", "dk", "-:-"],
						["Field 6", "April 22, 9:15 PM", "United States", "us", "Iceland", "is", "-:-"],
						["Field 1", "April 23, 9:15 AM", "Djibouti", "dj", "Denmark", "dk", "-:-"],
						["Field 2", "April 23, 9:15 AM", "France", "fr", "United States", "us", "-:-"],
						["Field 3", "April 23, 9:15 AM", "Sweden", "se", "Iceland", "is", "-:-"],
						["Field 1", "April 23, 10:45 AM", "Djibouti", "dj", "Iceland", "is", "-:-"],
						["Field 2", "April 23, 10:45 AM", "France", "fr", "Sweden", "se", "-:-"],
						["Field 3", "April 23, 10:45 AM", "United States", "us", "Denmark", "dk", "-:-"]]];

$(document).ready(function() {

	for (var i = 0; i < groups.length; i++) {
		console.log(groups[i]);
		for (var j = 1; j < groups[i].length; j++) {
			$(groups[i][0]).append("<div class=\"row fixture-row\"><div class=\"col-md-12\"><div class=\"col-md-2 col-xs-2 game-identifier\"><div class=\"row\"><div class=\"col-md-12\">" + groups[i][j][0] + "</div></div><div class=\"row\"><div class=\"col-md-12\">" + groups[i][j][1] + "</div></div></div><div class=\"col-md-4 col-xs-4 fixture-team\"><span class=\"flag-icon flag-icon-" + groups[i][j][3] + " flag-left\"></span>" + groups[i][j][2] + "</div><div class=\"col-md-2 col-xs-2 fixture-score\">" + groups[i][j][6] + "</div><div class=\"col-md-4 col-xs-4 fixture-team\">" + groups[i][j][4] + "<span class=\"flag-icon flag-icon-" + groups[i][j][5] + " flag-right\"></span></div></div></div>");
		}
	}

});