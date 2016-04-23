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

var points = 	[
					["#group-a", "Group A",
						["Cayman Islands", "ky", 7],
						["Turkey", "tr", 7],
						["Puerto Rico", "pr", 3],
						["Sudan", "sd", 0], "group-a"],
					["#group-b", "Group B",
						["India", "in", 9],
						["Vietnam", "vn", 4],
						["Spain", "es", 4],
						["Thailand", "th", 0], "group-b"],
					["#group-c", "Group C",
						["Iran", "ir", 9],
						["Ivory Coast", "ci", 4],
						["Iceland", "is", 4],
						["Italy", "it", 0], "group-c"],
					["#group-d", "Group D",
						["Nigeria", "ng", 7],
						["San Marino", "sm", 5],
						["USA", "us", 4],
						["South Korea", "kr", 0], "group-d"],
					["#group-e", "Group E",
						["Wales", "gb-wls", 9],
						["Pakistan", "pk", 6],
						["England", "gb-eng", 3],
						["Denmark", "dk", 0], "group-e"],
					["#group-f", "Group F",
						["Bahamas", "bs", 9],
						["Argentina", "ar", 3],
						["Peru", "pe", 3],
						["Hong Kong", "hk", 3], "group-f"],
					["#group-g", "Group G",
						["France", "fr", 7],
						["Chile", "cl", 6],
						["Brazil", "br", 4],
						["China", "cn", 0], "group-g"],
					["#group-h", "Group H",
						["Colombia", "co", 9],
						["Netherlands", "nl", 4],
						["Solomon Islands", "sb", 1],
						["Kazakhstan", "kz", 1], "group-h"]
				];

var pointsw = [
					["#group-a-w", "Group A",
						["Djibouti", "dj", 15],
						["United States", "us", 10],
						["France", "fr", 10],
						["Denmark", "dk", 6],
						["Iceland", "is", 3],
						["Sweden", "se", 0], "group-a-w"]

				];

var groups = 	[
					["#group-a-f", 
						[field1, "April 22, 5:30 PM", "Cayman Islands", "ky", "Puerto Rico", "pr", "2 : 1"],
						[field2, "April 22, 5:30 PM", "Sudan", "sd", "Turkey", "tr", "0 : 3"],
						[field5, "April 22, 7:45 PM", "Cayman Islands", "ky", "Turkey", "tr", "0 : 0"],
						[field6, "April 22, 7:45 PM", "Sudan", "sd", "Puerto Rico", "pr", "0 : 4"],
						[field1, "April 23, 8:30 AM", "Sudan", "sd", "Cayman Islands", "ky", "0 : 7"],
						[field2, "April 23, 8:30 AM", "Puerto Rico", "pr", "Turkey", "tr", "0 : 1"]],
					["#group-b-f", 
						[field3, "April 22, 5:30 PM", "India", "in", "Thailand", "th", "5 : 0"],
						[field1, "April 22, 6:15 PM", "Vietnam", "vn", "Spain", "es", "0 : 0"],
						[field5, "April 22, 8:30 PM", "India", "in", "Vietnam", "vn", "2 : 0"],
						[field6, "April 22, 8:30 PM", "Thailand", "th", "Spain", "es", "1 : 3"],
						[field3, "April 23, 8:30 AM", "India", "in", "Spain", "es", "1 : 0"],
						[field4, "April 23, 8:30 AM", "Vietnam", "vn", "Thailand", "th", "7 : 1"]],
					["#group-c-f", 
						[field2, "April 22, 6:15 PM", "Ivory Coast", "ci", "Iceland", "is", "1 : 1"],
						[field3, "April 22, 6:15 PM", "Iran", "ir", "Italy", "it", "2 : 0"],
						[field4, "April 22, 8:30 PM", "Ivory Coast", "ci", "Iran", "ir", "0 : 2"],
						[field3, "April 22, 9:15 PM", "Iceland", "is", "Italy", "it", "2 : 0"],
						[field5, "April 23, 8:30 AM", "Ivory Coast", "ci", "Italy", "it", "10 : 0"],
						[field6, "April 23, 8:30 AM", "Iran", "ir", "Iceland", "is", "2 : 0"]],
					["#group-d-f",
						[field4, "April 22, 6:15 PM", "Nigeria", "ng", "San Marino", "sm", "0 : 0"],
						[field5, "April 22, 6:15 PM", "United States", "us", "South Korea", "kr", "3 : 1"],
						[field1, "April 22, 8:30 PM", "Nigeria", "ng", "United States", "us", "2 : 0"],
						[field2, "April 22, 8:30 PM", "San Marino", "sm", "South Korea", "kr", "6 : 0"],
						[field5, "April 23, 9:15 AM", "United States", "us", "San Marino", "sm", "0 : 0"],
						[field4, "April 23, 9:15 AM", "Nigeria", "ng", "South Korea", "kr", "10 : 0"]],

					["#group-e-f",
						[field6, "April 22, 6:15 PM", "Pakistan", "pk", "Wales", "gb-wls", "0 : 2"],
						[field6, "April 22, 7:00 PM", "Denmark", "dk", "England", "gb-eng", "0 : 1"],
						[field3, "April 22, 8:30 PM", "Pakistan", "pk", "Denmark", "dk", "5 : 1"],
						[field1, "April 22, 9:15 PM", "Wales", "gb-wls", "England", "gb-eng", "3 : 0"],
						[field1, "April 23, 10:00 AM", "Pakistan", "pk", "England", "gb-eng", "4 : 1"],
						[field2, "April 23, 10:00 AM", "Wales", "gb-wls", "Denmark", "dk", "3 : 0"]],
					["#group-f-f",
						[field4, "April 22, 7:00 PM", "Bahamas", "bs", "Hong Kong", "hk", "8 : 0"],
						[field5, "April 22, 7:00 PM", "Argentina", "ar", "Peru", "pe", "2 : 3"],
						[field2, "April 22, 9:15 PM", "Argentina", "ar", "Bahamas", "bs", "0 : 1"],
						[field2, "April 22, 10:00 PM", "Peru", "pe", "Hong Kong", "hk", "0 : 2"],
						[field3, "April 23, 10:00 AM", "Argentina", "ar", "Hong Kong", "hk", "1 : 0"],
						[field4, "April 23, 10:00 AM", "Bahamas", "bs", "Peru", "pe", "3 : 0"]],
					["#group-g-f",
						[field1, "April 22, 7:45 PM", "Chile", "cl", "Brazil", "br", "2 : 0"],
						[field2, "April 22, 7:45 PM", "France", "fr", "China", "cn", "3 : 0"],
						[field4, "April 22, 10:00 PM", "Chile", "cl", "France", "fr", "0 : 1"],
						[field5, "April 22, 10:00 PM", "Brazil", "br", "China", "cn", "2 : 0"],
						[field4, "April 23, 10:45 AM", "Chile", "cl", "China", "cn", "3 : 1"],
						[field5, "April 23, 10:45 AM", "France", "fr", "Brazil", "br", "0 : 0"]],
					["#group-h-f", 
						[field3, "April 22, 7:45 PM", "Colombia", "co", "Solomon Islands", "sb", "5 : 0"],
						[field4, "April 22, 7:45 PM", "Netherlands", "nl", "Kazakhstan", "kz", "3 : 0"],
						[field1, "April 22, 10:00 PM", "Colombia", "co", "Netherlands", "nl", "2 : 0"],
						[field3, "April 22, 10:00 PM", "Solomon Islands", "sb", "Kazakhstan", "kz", "2 : 2"],
						[field5, "April 23, 10:00 AM", "Colombia", "co", "Kazakhstan", "kz", "7 : 0"],
						[field6, "April 23, 10:00 AM", "Netherlands", "nl", "Solomon Islands", "sb", "4 : 1"]],
					["#group-a-w-f",
						[field4, "April 22, 5:30 PM", "Djibouti", "dj", "France", "fr", "2 : 0"],
						[field5, "April 22, 5:30 PM", "United States", "us", "Sweden", "se", "3 : 0"],
						[field6, "April 22, 5:30 PM", "Denmark", "dk", "Iceland", "is", "2 : 1"],
						[field1, "April 22, 7:00 PM", "Djibouti", "dj", "United States", "us", "2 : 0"],
						[field2, "April 22, 7:00 PM", "France", "fr", "Iceland", "is", "3 : 1"],
						[field3, "April 22, 7:00 PM", "Sweden", "se", "Denmark", "dk", "0 : 3"],
						[field4, "April 22, 9:15 PM", "Djibouti", "dj", "Sweden", "se", "5 : 1"],
						[field5, "April 22, 9:15 PM", "France", "fr", "Denmark", "dk", "2 : 0"],
						[field6, "April 22, 9:15 PM", "United States", "us", "Iceland", "is", "2 : 0"],
						[field1, "April 23, 9:15 AM", "Djibouti", "dj", "Denmark", "dk", "3 : 0"],
						[field2, "April 23, 9:15 AM", "France", "fr", "United States", "us", "1 : 1"],
						[field3, "April 23, 9:15 AM", "Sweden", "se", "Iceland", "is", "0 : 10"],
						[field1, "April 23, 10:45 AM", "Djibouti", "dj", "Iceland", "is", "2 : 0"],
						[field2, "April 23, 10:45 AM", "France", "fr", "Sweden", "se", "10 : 0"],
						[field3, "April 23, 10:45 AM", "United States", "us", "Denmark", "dk", "10 : 0"]]];


$(document).ready(function() {

	for (var i = 0; i < groups.length; i++) {
		for (var j = 1; j < groups[i].length; j++) {
			$(groups[i][0]).append("<div class=\"row fixture-row\"><div class=\"col-md-12\"><div class=\"col-md-2 col-xs-2 game-identifier\"><div class=\"row\"><div class=\"col-md-12\">" + groups[i][j][0] + "</div></div><div class=\"row\"><div class=\"col-md-12\">" + groups[i][j][1] + "</div></div></div><div class=\"col-md-4 col-xs-4 fixture-team\"><span class=\"flag-icon flag-icon-" + groups[i][j][3] + " flag-left\"></span>" + groups[i][j][2] + "</div><div class=\"col-md-2 col-xs-2 fixture-score\">" + groups[i][j][6] + "</div><div class=\"col-md-4 col-xs-4 fixture-team\">" + groups[i][j][4] + "<span class=\"flag-icon flag-icon-" + groups[i][j][5] + " flag-right\"></span></div></div></div>");
		}
	}

	for (var i = 0; i < points.length; i++) {
		$(points[i][0]).append("<div class=\"col-md-3 col-xs-6 table-responsive\"><table class=\"table table-striped\"><thead><tr><th class=\"table-head\">" + points[i][1] + "</th><th class=\"table-head points-head\">Pts</th></tr></thead><tbody id=\"tbody-" + points[i][6] + "\">");
		for (var j = 2; j < 6; j++) {
			$("#tbody-" + points[i][6]).append("<tr><td class=\"table-body\"><span class=\"flag-icon flag-icon-" + points[i][j][1] + "\"></span> " + points[i][j][0] + "</td><td class=\"points\">" + points[i][j][2] + "</td></tr>");
		}
		$(points[i][0]).append("</tbody></table></div>");
	}

	for (var i = 0; i < pointsw.length; i++) {
		$(pointsw[i][0]).append("<div class=\"col-md-12 table-responsive\"><table class=\"table table-striped\"><thead><tr><th class=\"table-head\">" + pointsw[i][1] + "</th><th class=\"table-head points-head\">Pts</th></tr></thead><tbody id=\"tbody-" + pointsw[i][8] + "\">");
		for (var j = 2; j < 8; j++) {
			$("#tbody-" + pointsw[i][8]).append("<tr><td class=\"table-body\"><span class=\"flag-icon flag-icon-" + pointsw[i][j][1] + "\"></span> " + pointsw[i][j][0] + "</td><td class=\"points\">" + pointsw[i][j][2] + "</td></tr>");
		}
		$(pointsw[i][0]).append("</tbody></table></div>");
	}

});