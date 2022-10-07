import logo from './images/logo.svg';
import './App.css';
import scissors from './images/icon-scissors.svg'
import paper from './images/icon-paper.svg'
import rock from './images/icon-rock.svg'
import {useState} from 'react';
import backGround from './images/360_F_442215355_AjiR6ogucq3vPzjFAAEfwbPXYGqYVAap.jpeg'

function App() {
  const [img1, setImg1] = useState(scissors)
  const [img2, setImg2] = useState(scissors)
  const [result1, setResult1] = useState('scissors')
  const [result2, setResult2] = useState('scissors')
  const [score, setScore] = useState(0)
  const [scores, setScores] = useState(0)
  const [hasWon, setHasWon] = useState('START')
  const [start, setStart] = useState(0)

  let rps = ['rock', 'paper', 'scissors']

  function handleChange() {
    let randomNumber = Math.floor(Math.random() * 3)
    // let result = rps[randomNumber]
    let result1 = rps[randomNumber]
    console.log(result1);
    if(rps[randomNumber] == 'rock') {
        setImg2(rock)
        setResult1('ROCK')
    }else if (rps[randomNumber] == 'paper') {
      setImg2(paper)
      setResult1('PAPER')
    }else{
      setImg2(scissors)
      setResult1('SCISSORS')
    }

    if (result2 == result1) {
      setHasWon('IT IS A TIE')
    }else if (result2 == 'rock' && result1 == 'scissors'){
        setHasWon('YOU WIN')
        setScore(score + 1)
    }else if (result2 == 'scissors' && result1 == 'paper') {
      setHasWon('YOU WIN')
      setScore(score + 1)
    }else if (result2 == 'paper' && result1 == 'rock') {
      setHasWon('YOU WIN')
      setScore(score + 1)
    }else {
      setHasWon('YOU LOSE')
      setScores(scores + 1)
    }
  }
  function handleChange1() {
    setImg1(rock)
    setResult2('rock')
  }
  function handleChange2() {
    setImg1(paper)
    setResult2('paper')
  }
  function handleChange3() {
    setImg1(scissors)
    setResult2('scissors')
  }
  function start1() {
    setScore(0)
    setScores(0)
  }
 
  return (
    <div className="App">
       <div className='scor'>
      <img src={logo} alt="" />
        <div className='display'>
      <h1><span className='user'>Your Score:</span> {score}</h1>
      <h1><span className='com'>Computer Score:</span> {scores}</h1>
      </div>
      </div>
       <div className='Container'>  
        <div>
          <h1 className='picked'>YOU PICKED</h1>
          <div className='immg'>
          <img src={img1} alt="" />
          </div>
          <h2 className='result2'>{result2}</h2>
        </div>
        <div>
          <h2 className='start'>{hasWon}</h2>
          <button className='Btn1' onClick={() => {
            handleChange()
          }}>PLAY</button>
        </div>
        <div>
          <h1 className='house'>THE HOUSE PICKED</h1>
          <div className='immg1'>
          <img src={img2} alt="" />
          </div>
          <h2 className='result1'>{result1}</h2>
        </div>
       </div>
       <div className='Btns'>
       <button className='btnStart' onClick={() => {
         start1()
       }}>STARTOVER</button>
       <div className='Btn'>
        <button className='btnSt' onClick={() => {
          handleChange1()
        }}>ROCK</button>
        <button className='btnSt' onClick={() => {
          handleChange2()
        }}>PAPER</button>
        <button className='btnSt' onClick={() => {
          handleChange3()
        }}>SCISSORS</button>
       </div>
       </div>
       <div className='kuda'>
        <h1><span className='k'>K</span><span className='u'>U</span><span className='d'>D</span><span className='a'>A</span><span className='dash'>~</span><span className='t'>T</span></h1>
       </div>
    </div>
  );
}

export default App;
