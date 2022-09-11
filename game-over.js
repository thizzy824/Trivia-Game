// grab elements needed for Hall of fame
const playerName = document.querySelector('#playername')
const saveScore = document.querySelector('#saveScore')
const endScore = document.querySelector('#endScore')
const lastScore = document.querySelector('#lastScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_SCORES = 4

endScore.innerText = lastScore

saveLastScore = e => {
    e.preventDefault()
    const score = {
        score: lastScore,
        name: playerName.value
    }
    highScores.push(score)

    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(4)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}