// console.log('yadadaaaaa');

/*----- constants -----*/
// Questions for the game

const quest1 = 'What city are the 49ers from?';
const quest2 = 'How many rings does Tom Brady have?';
const quest3 = 'Which player is known as "The Sheriff"?';
const quest4 =
	'Which player legally changed his name to "OchoCinco" to match his jersey number? (#85)';
const quest5 = 'What is Deion Sanders iconic nickname?';
const quest6 = 'What is the Buffalo Bills fan-base known as?';
const quest7 = 'Who is the GOAT?';

// Answers for game
const ans1 = 'San Francisco';
const ans2 = 7;
const ans3 = 'Peyton Manning';
const ans4 = 'Chad Johnson';
const ans5 = 'Prime Time';
const ans6 = 'Bills Mafia';
const ans7 = 'Tom Brady';

/*----- app's state (variables) -----*/
// Variables grabbed from HTML
const question = document.querySelector('#question');
// use an array method array.from that creates new array from answers
const answers = document.querySelectorAll('.answer-text');
const currentLevel = document.querySelector('#currentText');
const scoreCount = document.querySelector('#score');
// create empty object
let currentQuestion = {};
// variables that will change/be updated
let takeAnswers = true;
let score = 0;
let questionNumber = 0;
let remainingQuestions = [];

// create array and object with questions and answer options
let questions = [
	{
		question: quest1,
		option1: ans1,
		option2: 'New York',
		option3: 'Denver',
		option4: 'Las Vegas',
		answer: 1,
	},
	{
		question: quest2,
		option1: 5,
		option2: 6,
		option3: ans2,
		option4: 8,
		answer: 3,
	},
	{
		question: quest3,
		option1: 'Brett Favre',
		option2: 'Patrick Mahomes',
		option3: 'Joe Burrow',
		option4: ans3,
		answer: 4,
	},
	{
		question: quest4,
		option1: 'Randy Moss',
		option2: ans4,
		option3: 'Tony Gonzalez',
		option4: 'Antonio Gates',
		answer: 2,
	},
	{
		question: quest5,
		option1: 'The Play-Maker',
		option2: 'Megatron',
		option3: ans5,
		option4: 'Weapon X',
		answer: 3,
	},
	{
		question: quest6,
		option1: ans6,
		option2: ' Forever Faithful',
		option3: 'The 12th Man',
		option4: "America's Team",
		answer: 1,
	},
	{
		question: quest7,
		option1: 'Joe Montana',
		option2: 'Bo Jackson',
		option3: 'Lawrence Taylor',
		option4: ans7,
		answer: 4,
	},
];

/*----- cached element references -----*/
// point system
const pointsAwarded = 1000;
// set total number of questions
const totalQuestions = 7;

/*----- functions -----*/
// create function to play game
playGame = () => {
	// set default values
	questionNumber = 0;
	score = 0;
	// [...] get all values (in this case objects)in an array
	// https://codeburst.io/what-are-three-dots-in-javascript-6f09476b03e1
	remainingQuestions = [...questions];
	nextQuestion();
};
// create function to prompt next question
getNextQuestion = () => {
	// if there are 0 remaining questions-save last score
	if (remainingQuestions.length === 0 || questionNumber > totalQuestions) {
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
	currentLevel.innerText = `Level ${questionNumber} / ${totalQuestions}`;
	// randomize questions and set next question text
	const questionsIndex = Math.floor(Math.random() * remainingQuestions.length);
	// keep track of what question player is currently on
	currentQuestion = remainingQuestions[questionsIndex];
	question.innerText = currentQuestion.question;
	// forEach method to apply to all answer text
	
	answers.forEach((option) => {
		const number = answers.dataset['num'];
		option.innerText = currentQuestion['option' + number];
	});
	
	//  remove elements from the remainingQuestions array using splice method
	remainingQuestions.splice(questionsIndex, 1);
	
	takeAnswers = true;
};

/*----- event listeners -----*/

answers.forEach(option => {
	option.addEventListener('click', e => {
		// if the game isnt taking answers, function ends
		if (!takeAnswers) {
			return
		}
		// set variable made earlier takeAnswers to false
		takeAnswers = false
		const optionChosen = e.target
		const answerChosen = optionChosen.dataset['num']
		// apply styling class to right/wrong answers using conditional ternary operators
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
		let classBeingApplied = answerChosen == currentQuestion.answer ? 'correct' : 'incorrect'
		// create another conditional to increase score
		if (classBeingApplied === 'correct') {
			awardPoints(pointsAwarded)
		}
		// add classBeingApplied to optionChosen using classList.add method
		optionChosen.parentElement.classList.add(classBeingApplied)
		// remove class added after a set amount of time using setTimeout method and classlist.remove method
		setTimeout(() => {
			optionChosen.parentElement.classList.remove(classBeingApplied)
			// run getNextQuestion function to proceed to next question after timer set
			getNextQuestion()
		}, 1000)
	})
})

awardPoints = points => {
	score += points
	scoreCount.innerText = score
}

playGame()