console.log('yadadaaaaa')

/*----- constants -----*/
// Questions for the game

const quest1 = 'What city are the 49ers from?'
const quest2 = 'How many rings does Tom Brady have?'
const quest3 = 'Which player is known as "The Sheriff"?'
const quest4 = 'Which player legally changed his name to "OchoCinco" to match his jersey number? (#85)'
const quest5 = 'What is Deion Sanders iconic nickname?'
const quest6 = 'What is the Buffalo Bills fan-base known as?'
const quest7 = 'Who is the GOAT?'

// Answers for game
const ans1 = 'San Francisco'
const ans2 = 7
const ans3 = 'Peyton Manning'
const ans4 = 'Chad Johnson'
const ans5 = 'Prime Time'
const ans6 = 'Bills Mafia'
const ans7 = 'Tom Brady'



/*----- app's state (variables) -----*/
// Variables grabbed from HTML
const question = document.querySelector('#question')
// use an array method array.from that creates new array from answers
const answers = document.querySelectorAll('.answer-text')
const currentLevel = document.querySelector('#current-text')
const scoreCount = document.querySelector('#score')
// create empty object
let currentQuestion = {}
// variables that will change/be updated
let takeAnswers = true
let score = 0
let questionNumber = 0
let remainingQuestions = []

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
        answer:4,
    },
]

/*----- cached element references -----*/
// point system
const pointsAwarded = 1000
// set total number of questions
const totalQuestions = 7



/*----- event listeners -----*/



/*----- functions -----*/
// create function to play game
playGame = () => {
    // set default values
	questionNumber = 0;
	score = 0;
	// [...] get all values (in this case objects)in an array
	// https://codeburst.io/what-are-three-dots-in-javascript-6f09476b03e1
	remainingQuestions = [...questions]
    nextQuestion()
}
