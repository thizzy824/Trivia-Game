console.log('yadadaaaaa')

/*----- constants -----*/
// Questions for the game

const quest1 = 'What city are the 49ers from?'
const quest2 = 'How many rings does Tom Brady have?'
const quest3 = 'Which player is known as "The Sheriff"?'
const quest4 = 'What name did player Chad Johnson legally change his name to?'
const quest5 = 'What is Deion Sanders iconic nickname?'
const quest6 = 'What is the Buffalo Bills fan-base known as?'
const quest7 = 'Who is the GOAT?'

// Answers for game
const ans1 = 'San Francisco'
const ans2 = 7
const ans3 = 'Peyton Manning'
const ans4 = 'Ocho Cinco'
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
    }
]






/*----- cached element references -----*/



/*----- event listeners -----*/



/*----- functions -----*/