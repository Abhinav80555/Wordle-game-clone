import { useEffect, useState } from 'react'
import { api } from './components/api'
import Wordle from './components/Wordle'

function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    fetch(`${api}/solutions`)
      .then(res => res.json())
      .then(json => {
        // random int between 0 & 14
        // console.log(json)
        const randomSolution = json[Math.floor(Math.random()*json.length)]
        setSolution(randomSolution.word)
      })
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  )
}

export default App