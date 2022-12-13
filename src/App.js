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

const Game = ({ step, question, onClickVariant }) => {
  const percentage = Math.round(step / questions.length * 100);


  return (
    <>
      <div className='progress'>
        <div className='progress__inner' style={{ width: `${percentage}%` }}></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (<li onClick={() => onClickVariant(index)} key={text}>{text}</li>))
        }
      </ul>
    </>
  )
}

const Result = ({ correct }) => {
  return (
    <div className='result'>
      <img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
      <h2>You answered {correct} out {questions.length} question</h2>
      <a href='/'>
        <button>Retry</button>
      </a>
    </div>
  )
}
const App = () => {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
      console.log(correct, question.correct);
    }
  }
  return (
    <div className='App'>
      {
        step !== questions.length ? (<Game question={question} step={step} onClickVariant={onClickVariant} />) : (
          <Result correct={correct} />
        )
      }

    </div>

  );
}

export default App;
