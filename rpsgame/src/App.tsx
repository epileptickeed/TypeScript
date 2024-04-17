import { useState } from 'react'
import './App.scss'
import icons from '../data/icons.json'

type IconsTypes = {
  title: string
  img: string
  id: number
}

function App() {
  const [score, setScore] = useState(0)
  const [selectedItem, setSelectedItem] = useState(0);

  const [yourPick, setYourPick] = useState('')
  const [botsPick, setBotsPick] = useState('')

  // console.log(yourPick)
  // console.log(botsPick)  
  
  const handleClick = (item: string) => {
    setYourPick(item)
    const randomIndex = Math.floor(Math.random() * icons.length)
    const botPick = icons[randomIndex].title
    setBotsPick(botPick)

    if (
      (item === 'rock' && botPick === 'scissors') ||
      (item === 'paper' && botPick === 'rock') ||
      (item === 'scissors' && botPick === 'paper')
    ) {
      setScore(curScore => curScore + 1);
    } else if (item === botPick) {
      // alert('Draw')
    } else {
      setScore(curScore => curScore - 1);
    }
  };

  console.log(yourPick);
  console.log(botsPick);

  

  return (
    <div className='main_wrapper'>
      <header className='header'>
        <div>
          <h1>Rock</h1>
          <h1>Paper</h1>
          <h1>Scissors</h1>
        </div>
        <div className='score'>
          <h2>Score</h2>
          <p className='score_value'>{score}</p>
        </div>
      </header>

      <main className='game'>
        {icons.map((item, index) => {
          return (
            <div key={index} className='icon_card'>
              <img src={item.img} alt={item.title} 
                onClick={() => handleClick(item.title)}
                // style={{ display: selectedItem === index ? 'block' : 'none' }}
              />
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default App
