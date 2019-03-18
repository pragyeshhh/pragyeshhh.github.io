function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var correct = 0;


	if (question1 == "Black") {
		correct++;
	}
	if (question2 == "Chandler") {
		correct++;
	}	
	if (question3 == "LOTBS") {
		correct++;
	}
	if (question4 == "Food") {
		correct++;
	}
	if (question5 == "Paris") {
		correct++;
	}
	if (question6 == "YJHD") {
		correct++;
	}
	if (question7 == "Dhoni") {
		correct++;
	}
	if (question8 == "Ronaldo") {
		correct++;
	}
	if (question9 == "LFC") {
		correct++;
	}
	
	var pictures = ["img/9.gif", "img/8.gif", "img/7.gif", "img/5-6.gif", "img/3-4.gif", "img/1-2.gif", "img/0.gif"];
	var messages = ["You are Jayshree herself.", "You are very close with her.", "You know her pretty well.", "Quiete good.", "Gotta do better.", "Looks like you are guessing.","Who the fuck even are you?"];
	var score;

	if (correct == 0) {
		score = 6;
	}
	if (correct > 0 && correct < 3) {
		score = 5;
	}
	if (correct > 2 && correct < 5) {
		score = 4;
	}
	if (correct > 4 && correct < 7) {
		score = 3;
	}
	if (correct == 7) {
		score = 2;
	}
	if (correct == 8) {
		score = 1;
	}
	if (correct == 9) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}