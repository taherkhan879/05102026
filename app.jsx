import {useState, useEffect} from 'react'

import './index.css'

const Scoreboard = () => {
  const [score, setScore] = useState(0)
  useEffect(() => {
    document.title = `score: ${score}`
    console.log(score)
  })

  const onIncrement = () => {
    setScore(prevScore => prevScore + 1)
  }

  const onDecrement = () => {
    setScore(prevScore => prevScore - 1)
  }

  return (
    <div className="main-container">
      <h1>Score</h1>
      <p className="score-text">{score}</p>
      <div className="buttons-container">
        <button className="button" onClick={onIncrement} type="button">
          Increase
        </button>
        <button className="button" onClick={onDecrement} type="button">
          Decrease
        </button>
      </div>
    </div>
  )
}

export default Scoreboard
