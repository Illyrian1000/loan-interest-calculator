import { useState } from "react";

import "./Input.css";
export default function Input(props) {
  const [amount, setAmount] = useState(50000);
  const [period, setPeriod] = useState(10);
  const [interest, setInterest] = useState(4);

  function changeAmountHandler(e) {
    e.preventDefault();

    if (e.target.valueAsNumber <= 200000 && e.target.valueAsNumber >= 0) {
      setAmount(e.target.valueAsNumber);
    } else if (e.target.valueAsNumber < 0) {
      setAmount(0);
    } else if (e.target.valueAsNumber > 200000) {
      setAmount(200000);
      console.log(e.target.valueAsNumber);
    } else {
      setAmount(e.target.valueAsNumber);
    }

    // setAmount(e.target.valueAsNumber);
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
    if (amount && period && interest !== 0) {
      let dataObj = {
        passAmount: amount,
        passPeriod: period,
        passInterest: Number(interest),
      };
      return props.outputData(dataObj);
    } else {
      console.log("insert all data");
    }
  }

  return (
    <form action="">
      <div className="inputGroup">
        <label htmlFor="totalSum">
          {" "}
          <span className="label-text">Shuma Totale ne Euro:</span> {amount} €
        </label>
        <input
          type="number"
          step={1000}
          id="totalSum"
          min={0}
          max={200000}
          onChange={changeAmountHandler}
          value={amount}
        />

        <input
          type="range"
          step={1000}
          id="totalSum"
          min={0}
          max={200000}
          onChange={changeAmountHandler}
          value={amount}
        />
      </div>
      <div className="inputGroup">
        <label htmlFor="duration">
          <span className="label-text">Periudha ne vite:</span> {period}
        </label>
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
        <label htmlFor="interest">
          <span className="label-text">Interesi %</span>
        </label>
        <input
          type="number"
          id="interest"
          min={1}
          max={100}
          value={interest}
          onChange={changeInterestHandler}
        />
      </div>

      <button onClick={submitHandler}>Llogarit</button>
    </form>
  );
}
