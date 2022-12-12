import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'Question 1?',
    variants: ['var1', 'var2', 'var3'],
    correct: 0,
  },
  {
    title: 'Question 2?',
    variants: ['var4', 'var5', 'var6'],
    correct: 1,
  },
  {
    title: 'Question 3?',
    variants: ['var7', 'var8', 'var9'],
    correct: 2,
  }
];

const Game = () => {
  return (
    <>
      <div className='progress'>
        <div className='progress__inner' style={{ width: '50%' }}></div>
      </div>
      <h1>Question</h1>
      <ul>
        <li>Variant1</li>
        <li>Variant2</li>
        <li>Variant3</li>
      </ul>
    </>
  )
}

const Result = () => {
  return (
    <div className='result'>
      <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
      <h2>You answered 2 out 3 question</h2>
      <button>Retry</button>
    </div>
  )
}
const App = () => {
  return (
    <div className='App'>
      <Game />
      {/* <Result /> */}
    </div>

  );
}

export default App;
