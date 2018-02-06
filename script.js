
/**changes text color for all paragraphs individually with preset colors**/
function changeTextColor() {
	document.getElementById("paragraph1").style.color = "#6A266F";
	document.getElementById("paragraph2").style.color = "#FF7400";
	document.getElementById("paragraph3").style.color = "#27A200";
	document.getElementById("named").style.color = "#074AA7";
	document.getElementById("author").style.color = "#2911B1";
};

/**changes text font for all paragraphs individually with preset fonts**/
function changeFont() {
	document.getElementById("paragraph1").style.fontFamily = "Arial";
	document.getElementById("paragraph2").style.fontFamily = "Courier";
	document.getElementById("named").style.fontFamily = "Times New Roman", Times, serif;
	document.getElementById("author").style.fontFamily = "Georgia, serif";
};
/**adds highlight to paragraph1**/
function highlightParagraph1() {
	document.getElementById("paragraph1").style.backgroundColor = "yellow";
};
/**adds highlight to paragraph2**/
function highlightParagraph2() {
	document.getElementById("paragraph2").style.backgroundColor = "yellow";
};
/**adds highlight to paragraph3**/
function highlightParagraph3() {
	document.getElementById("paragraph3").style.backgroundColor = "yellow";
};
/** changes all "s" to "$"**/
//function replaceS() {
//	document.getElementById("body")str.replace(/s/g,"$"));
//};

//$("#idBut").click(function() {
//	$("body").children().each(function() {
//		$(this).html($(this).html().replace(/"s"/g,"$"));
//	});
//});

/**
 * shuffles an array using the Fisher-Yates algorithm
 *
 * @see https://github.com/Daplie/knuth-shuffle Knuth shuffle
 * @param {Array} array of items to shuffle
 * @return {Array} shuffled array of items
 * @author Dylan McDonald
 * @author Anna Khamsamran <akhamsamran1@cnm.edu>
 **/
/**
function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

**/
/**
 * loads a color into css based on an array of color codes
 **/
/**
function chooseColors() {
	var colors = [
		"#3505DC", "#8333F4", "#DF24F3", "#F8219B", "#FB2267",
		"#FF2222", "#FF6C22", "#FF9222", "#FFAF22", "#FFC922",
		"#FFE022", "#FFFE22", "D4FE22#", "#9DFC22", "#21F82F",
		"#21F3CA", "#2F96F3", "#3B58F4", "#5F3AF5"];

	var assignColor = shuffle(chooseColors);
	var k = 0;
	var css = "";
	for (var i = 0; i < 5; i++) {
		css = css + "#paragraph1";
		for (var j = 0; j < 5; j++) {
			var content = "";
			content = chooseColors[k];
			k++;
			}
			css = css + "#paragraph1 { color: " + content + ";}"
		}
		html = html + "</tr>";
	}
	//is this an option?, but then you have to go put an element called snapAnswer into the HTML
	document.getElementById("snapAnswer").innerHTML = bingoCard[2];
	document.getElementById("bingoCard").innerHTML = html;
}

 **/
/**
 solution:
 // captain Dylan works for any sort of tag
 var cells = document.getElementsByClassName("table");
 cells[0].children[0].children[0].children[2];
 // Tristan only works for table tag
 document.getElementById("bingoCard").rows[0].cells[2];
 **/
