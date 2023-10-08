import { useState } from 'react'

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
 
  const totalFeedbacks = good + neutral + bad

  const averageScore = (good - bad) / totalFeedbacks || 0

  const positivePercentage = (good / totalFeedbacks) * 100 || 0

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total Feedbacks" value={totalFeedbacks} />
          <StatisticLine text="Average Score" value={averageScore.toFixed(2)} />
          <StatisticLine
            text="Positive Feedback Percentage"
            value={positivePercentage.toFixed(2) + '%'}
          />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = (type) => {
    if (type === 'good') {
      setGood(good + 1)
    } else if (type === 'neutral') {
      setNeutral(neutral + 1)
    } else if (type === 'bad') {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <h2>Feedback</h2>
      <Button text="Good" onClick={() => handleFeedback('good')} />
      <Button text="Neutral" onClick={() => handleFeedback('neutral')} />
      <Button text="Bad" onClick={() => handleFeedback('bad')} />

      {good + neutral + bad > 0 && (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  )
}

export default App