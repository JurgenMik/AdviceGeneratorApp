import React from 'react';
import { useState } from 'react';
import Dice from './assets/icon-dice.svg';
import PatterDivider from './assets/pattern-divider-desktop.svg'

function App() {

  const [advice, setAdvice] = useState({
    id: '',
    advice: '',
  });

  const fetchAdvice = async() => {
    const url = "https://api.adviceslip.com/advice";
    try {
      const response = await fetch(url);
      const json = await response.json();
        setAdvice({
          id: json.slip.id,
          advice: json.slip.advice
        });
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-800 flex justify-center relative">
      <div className="bg-white sm:w-1/5 w-96 h-80 absolute top-1/4 rounded-lg bg-slate-700">
        <div className="w-full h-1/5 pt-10 flex justify-center">
          <p className="text-green-300 text-xs tracking-widest">ADVICE {advice.id}</p>
        </div>
        <div className="w-3/4 sm:h-36 h-40 mt-6 m-auto">
          <p className="text-white sm:text-md text-xl text-center font-bold tracking-wide">
            {advice.advice}
          </p>
        </div>
        <div className="w-full flex justify-center">
          <img className="w-3/4"
               src={PatterDivider}
               alt="pattern"
          />
        </div>
        <div className="flex justify-center sm:mt-8 sm:pt-4 pt-8">
          <div className="bg-green-300 shadow hover:shadow-lg hover:shadow-emerald-300 h-12 w-12 rounded-full justify-center">
            <img className="m-auto mt-3"
                 src={Dice}
                 alt="dice"
                 onClick={fetchAdvice}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
