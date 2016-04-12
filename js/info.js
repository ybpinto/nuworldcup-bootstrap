var showMainList = function() {
	$(".ul-2").slideDown();
};

var showWCFix = function() {
	console.log("hi1");
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
						[""]
					]

				];

$(document).ready(function() {



});