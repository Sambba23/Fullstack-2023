import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const StatisticsLine = (p) => {
    return(
        <tr>
          <td>{p.text}</td>
          <td>{p.value}{p.add}</td>
        </tr>
    )
  }
  if (props.allNum != 0){
    return (
      <table>
        <tbody>
          <StatisticsLine text = "good" value = {props.good}/>
          <StatisticsLine text = "neutral" value = {props.neutral}/>
          <StatisticsLine text = "bad" value = {props.bad}/>
          <StatisticsLine text = "all" value = {props.allNum}/>
          <StatisticsLine text = "average" value = {props.avg}/>
          <StatisticsLine text = "positive" value = {props.good / props.allNum * 100} add = "%"/>
          
        </tbody>
      </table>
    )
  } else {
    return(
      <div> 
        <p>No feedback given</p>
      </div>
    )
  }
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    setGood(good + 1)
  }
  const setToNeutral = () => {
    setNeutral(neutral + 1)
  }
  const setToBad = () => {
    setBad(bad + 1)
  }
  const allNum = bad + neutral + good
  const avg = (good - bad) / allNum
  
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={setToGood} text= "good" />
      <Button handleClick={setToNeutral} text= "neutral" />
      <Button handleClick={setToBad} text= "bad" />
      <h2>Statistics</h2>
      <Statistics good = {good} bad = {bad} neutral = {neutral} allNum = {allNum} avg = {avg} />
    </div>
  )
}

export default App