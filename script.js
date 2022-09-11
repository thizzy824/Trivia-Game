// console.log('yadadaaaaa');

/*----- constants -----*/
// Questions for the game

// 'What city are the 49ers from?';
// 'How many rings does Tom Brady have?';
// 'Which player is known as "The Sheriff"?';
// 'Which player legally changed his name to "OchoCinco" to match his jersey number? (#85)';
// 'What is Deion Sanders iconic nickname?';
// 'What is the Buffalo Bills fan-base known as?';
// 'Who is known as the GOAT?';

// Answers for game
// 1 = 'San Francisco';
// 2 = 7;
// 3 = 'Peyton Manning';
// 4 = 'Chad Johnson';
// 5 = 'Prime Time';
// 6 = 'Bills Mafia';
// 7 = 'Tom Brady';

/*----- app's state (variables) -----*/
// Variables grabbed from HTML
const question = document.querySelector('#question');
// use an array method array.from that creates new array from answers
const answers = Array.from(document.querySelectorAll('.answer-text'));
const currentLevel = document.querySelector('#currentText');
const scoreCount = document.querySelector('#score');
// create empty object
let currentQuestion = {};
// variables that will change/be updated
let takingAnswers = true;
let score = 0;
let questionNumber = 0;
let remainingQuestions = [];

// create array and object with questions and answer options
let questions = [
	{
		question: 'What city are the 49ers from?',
		option1: 'San Francisco',
		option2: 'New York',
		option3: 'Denver',
		option4: 'Las Vegas',
		answer: 1,
	},
	{
		question: 'How many rings does Tom Brady have?',
		option1: '5',
		option2: '6',
		option3: '7',
		option4: '8',
		answer: 3,
	},
	{
		question: 'Which player is known as "The Sheriff"?',
		option1: 'Brett Favre',
		option2: 'Patrick Mahomes',
		option3: 'Joe Burrow',
		option4: 'Peyton Manning',
		answer: 4,
	},
	{
		question:
			'Which player legally changed his name to "OchoCinco" to match his jersey number? (#85)',
		option1: 'Randy Moss',
		option2: 'Chad Johnson',
		option3: 'Tony Gonzalez',
		option4: 'Antonio Gates',
		answer: 2,
	},
	{
		question: 'What is Deion Sanders iconic nickname?',
		option1: 'The Play-Maker',
		option2: 'Megatron',
		option3: 'Prime Time',
		option4: 'Weapon X',
		answer: 3,
	},
	{
		question: 'What is the Buffalo Bills fan-base known as?',
		option1: 'Bills Mafia',
		option2: ' Forever Faithful',
		option3: 'The 12th Man',
		option4: "America's Team",
		answer: 1,
	},
	{
		question: 'Who is known as the GOAT?',
		option1: 'Joe Montana',
		option2: 'Bo Jackson',
		option3: 'Lawrence Taylor',
		option4: 'Tom Brady',
		answer: 4,
	},
	{
		question: 'Which City did the St. Louis Rams move their team to?',
		option1: 'Minnesota',
		option2: 'Los Angeles',
		option3: 'Indianapolis',
		option4: 'Detroit',
		answer: 2,
	},
	{
		question: 'Which team is the only team to go undefeated in a season?',
		option1: 'Miami Dolphins',
		option2: 'GreenBay Packers',
		option3: 'New England Patriots',
		option4: 'Dallas Cowboys',
		answer: 1,
	},
	{
		question:
			'What player threw for 30+ Touchdowns and 30+ Interceptions in the same season?',
		option1: 'Joe Montana',
		option2: 'Jamarcus Russell',
		option3: 'Brett Favre',
		option4: 'Jameis Winston',
		answer: 4,
	},
];

/*----- cached element references -----*/
// point system
const POINTS_AWARDED = 1000;
// set total number of questions
const TOTAL_QUESTIONS = 10;

/*----- functions -----*/
// create function to play game
playGame = () => {
	// set default values
	questionNumber = 0;
	score = 0;
	// [...] get all values (in this case objects)in an array
	// https://codeburst.io/what-are-three-dots-in-javascript-6f09476b03e1
	remainingQuestions = [...questions];
	getNextQuestion();
};
// create function to prompt next question
getNextQuestion = () => {
	// if there are 0 remaining questions-save last score
	if (remainingQuestions.length === 0 || questionNumber > TOTAL_QUESTIONS) {
		// https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
		// use setItem method of storage interface when passed a key name/value
		localStorage.setItem('lastScore', score);
		// https://developer.mozilla.org/en-US/docs/Web/API/Location/assign
		// use location.assign method to cause the window to load and display on the URL specified
		return window.location.assign('game-over.html');
	}
	// increase question number if there are remaining questions
	questionNumber++;
	//  change text to display current level by using method .innerText
	currentLevel.innerText = `Level ${questionNumber} / ${TOTAL_QUESTIONS}`;
	// randomize questions and set next question text
	const questionsIndex = Math.floor(Math.random() * remainingQuestions.length);
	// keep track of what question player is currently on
	currentQuestion = remainingQuestions[questionsIndex];
	question.innerText = currentQuestion.question;
	// forEach method to apply to all answer text

	answers.forEach((option) => {
		const number = option.dataset['num'];
		option.innerText = currentQuestion['option' + number];
	});

	//  remove elements from the remainingQuestions array using splice method
	remainingQuestions.splice(questionsIndex, 1);

	takingAnswers = true;
};

/*----- event listeners -----*/

answers.forEach((option) => {
	option.addEventListener('click', (e) => {
		// if the game isnt taking answers, function ends
		if (!takingAnswers) {
			return;
		}
		// set variable made earlier takeAnswers to false
		takingAnswers = false;
		const optionChosen = e.target;
		const answerChosen = optionChosen.dataset['num'];
		// apply styling class to right/wrong answers using conditional ternary operators
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
		let classBeingApplied =
			answerChosen == currentQuestion.answer ? 'right' : 'wrong';
		// create another conditional to increase score
		if (classBeingApplied === 'right') {
			awardPoints(POINTS_AWARDED);
		}
		// add classBeingApplied to optionChosen using classList.add method
		optionChosen.parentElement.classList.add(classBeingApplied);
		// remove class added after a set amount of time using setTimeout method and classlist.remove method
		setTimeout(() => {
			optionChosen.parentElement.classList.remove(classBeingApplied);
			// run getNextQuestion function to proceed to next question after timer set
			getNextQuestion();
		}, 1000);
	});
});

awardPoints = (points) => {
	score += points;
	scoreCount.innerText = score;
};

playGame();
