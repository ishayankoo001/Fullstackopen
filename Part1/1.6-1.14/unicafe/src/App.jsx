import { useState } from 'react'
import Feedback from './Feedback'
import Statistic from './Statistics'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedback good={good} setGood={setGood} bad={bad} setBad={setBad} neutral={neutral} setNeutral={setNeutral} />
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App