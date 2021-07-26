import { useState, useEffect } from 'react';

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const [randomNumber, createRandomNumber] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  const oneSecond = 1000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(counter + 1)
    }, oneSecond)

    if (counter > 0 && counter % 10 === 0) {
      createRandomNumber(Math.floor(Math.random() * 101))
    }

    return () => clearInterval(timer)
  }, [counter])

  useEffect(() => {
    if (randomNumber && (randomNumber % 3 === 0 || randomNumber % 5 === 0)) {
      setIsCorrect(true)
      setTimeout(() => {
        createRandomNumber(null)
        setIsCorrect(false)
      }, 4000)
    }
  }, [randomNumber])

  return [counter, randomNumber, isCorrect]
}

export default useCounter;
