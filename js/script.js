$(document).ready(function() {

	// Smooth scrolling code
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 600, 'swing');
	});

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

	for (var i = 0; i < team.length; i++) {
		$("#team-members").append(
			"<div class=\"team-pic-div\"><img class=\"team-pic-img\" src=\"" + team[i][1] + ".jpg\"><p class=\"pic-name team-content-color\">" + team[i][0] + "</p></div>");
	}

	$(".team-pic-img").hover(
		function() {
			var imgSrc = $(this).attr("src");
			var newSrc = imgSrc.substring(0, imgSrc.indexOf(".")) + "2.jpg";

			$(this).attr("src", newSrc);
		}, 
		function() {
			var imgSrc = $(this).attr("src");
			var newSrc = imgSrc.substring(0, imgSrc.search("2")) + ".jpg";

			$(this).attr("src", newSrc);
		}
	);

	

});
