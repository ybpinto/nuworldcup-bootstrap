$(document).ready(function() {

// Biopics array
var team = [["Radhika Kalra", "img/headshots/radhika"],
			["Adyut Khazanchi", "img/headshots/adyut"],
			["Levin Zhu", "img/headshots/levin"],
			["Sofia Rada", "img/headshots/sofiarada"],
			["Aashrey Tiku", "img/headshots/aashrey"],
			["Edwin Argueta", "img/headshots/edwin"],
			["Milaap Mehta", "img/headshots/milaap"],
			["Aman Parikh", "img/headshots/aman"],
			["Armaan Shah", "img/headshots/armaan"],
			["Ashna Mehta", "img/headshots/ashna"],				
			["Aruj Chaudhry", "img/headshots/aruj"],
			["Abhi Shekhawat", "img/headshots/abhi"],
			["Chris Ebhogiaye", "img/headshots/chris"],
			["Akhil Shanishetti", "img/headshots/akhil"],
			["Ashwin Kulkarni", "img/headshots/ashwin"],
			["Emma Lane", "img/headshots/emma"],
			["Shikhar Soni", "img/headshots/shikhar"],
			["Mihir Swaroop", "img/headshots/mihir"],
			["Chaitra Subramaniam", "img/headshots/chaitra"],
			["Peter Beer", "img/headshots/peter"],
			["Samantha Cohen", "img/headshots/sam"],
			["Zain Syedain", "img/headshots/zain"],
			["Anna Kubacsek", "img/headshots/anna"],
			["Matthew Celentano", "img/headshots/matt"],
			["Kristian Farinha", "img/headshots/kristian"],
			["David Lee", "img/headshots/david"],
			["Alisha Gandhi", "img/headshots/alisha"],
			["Justine Kim", "img/headshots/justine"],
			["Astrid Goh", "img/headshots/astrid"],
			["Cameron Braverman", "img/headshots/cameron"],
			["Ellis Yun", "img/headshots/ellis"],
			["Ankita Chowdhry", "img/headshots/ankita"],
			["Mustafa Alimumal", "img/headshots/mustafa"],
			["Bee Nirundonpruk", "img/headshots/bee"],				
			["Sofia Lopez Franco", "img/headshots/slf"],
			["Gabriel Rojas-Westall", "img/headshots/gabe"],
			["Rafi Wasserman", "img/headshots/rafi"],
			["Esteban Mercado", "img/headshots/esteban"],
			["Jaiveer Kothari", "img/headshots/jaiveer"],
			["Yoni Pinto", "img/headshots/yoni"]];

	// Biopics addition code

	for (var i = 0; i < 8; i++) {
		$("#team-content").append("<div class=\"row\" id=\"row" + [i] + "\">");
		var j = i*6;
		for (j; j < (i+1)*6; j++) {
			$("#row" + [i] + "").append("<div class=\"col-md-2 img-portfolio\"><img class=\"img-responsive\" src=\"" + team[j][1] + ".jpg\"><p class=\"pic-name team-content-color\">" + team[j][0] + "</p></div>");
		};
		// $("#team-content").append(
		// 	"<div class=\"team-pic-div\"><img class=\"team-pic-img\" src=\"" + team[i][1] + ".jpg\"><p class=\"pic-name team-content-color\">" + team[i][0] + "</p></div>");
	}

});