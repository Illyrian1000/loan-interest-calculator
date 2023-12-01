import { useState } from "react";

import "./Input.css";
export default function Input() {
  const [amount, setAmount] = useState(50000);
  const [period, setPeriod] = useState(10);
  const [interest, setInterest] = useState(4);

  function changeAmountHandler(e) {
    e.preventDefault();
    setAmount(e.target.valueAsNumber);
  }

  function changePeriodHandler(e) {
    e.preventDefault();
    setPeriod(e.target.valueAsNumber);
  }

  function changeInterestHandler(e) {
    e.preventDefault();
    setInterest(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(amount, period, interest);

    let monthlyPeriod = period * 12;
    let monthlyInterest = Number(interest) / 100 / 12;

    //TO FIX: SHOW IT AS A NUMBER AND NOT AS A STRING
    monthlyInterest = Number(monthlyInterest);

    console.log(monthlyPeriod, monthlyInterest);

    // m = T * ( (mi * () ))

    let monthlyCost;

    let firstPart = monthlyInterest * (1 + monthlyInterest) ** monthlyPeriod;
    // console.log(firstPart);
    let secondPart = (1 + monthlyInterest) ** monthlyPeriod - 1;
    // console.log(secondPart);

    monthlyCost = amount * (firstPart / secondPart);
    console.log(monthlyCost);
  }

  return (
    <form action="">
      <div className="inputGroup">
        <label htmlFor="totalSum">Shuma Totale: {amount}</label>
        <input
          type="range"
          step={1000}
          id="totalSum"
          min={20000}
          max={200000}
          onChange={changeAmountHandler}
          value={amount}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="duration">Periudha ne vite: {period}</label>
        <input
          type="range"
          step={1}
          id="duration"
          min={5}
          max={25}
          onChange={changePeriodHandler}
          value={period}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="interest">Interesi %</label>
        <input
          type="number"
          id="interest"
          min={1}
          max={100}
          value={interest}
          onChange={changeInterestHandler}
        />
      </div>

      <button onClick={submitHandler}>Submit</button>
    </form>
  );
}
