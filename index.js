
const title = document.createElement("h2");
title.innerHTML = "StartupIN Quiz";


const myquestion = {
		question: "Which of the below is the main purpose of a business plan?",
		answers: {
			a:'To help you strategise and outline what you want to achieve with your business',
			b:'To help you structure the financial side of your business more efficiently',
			c:'To help you plan your organisational structure',
			d:'To help you identify key markets and target audiences',
			e:'All of the above'
		}	
}


const quizContainer = document.getElementById('quiz');
const quizTitle = document.getElementById("quiz-title").appendChild(title);
const quizButton = document.getElementById("btn");



quizButton.addEventListener('click', function(){
		alert("your replies have been sent! thx :)")
})
