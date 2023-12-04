import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";

function App() {
  const [status, setStatus] = useState(false);

  const [passObj, setPassObj] = useState({});

  function handleData(dataReceived) {
    setStatus(true);
    let monthlyInterest = dataReceived.passInterest / 100;
    monthlyInterest = monthlyInterest / 12;
    let period = dataReceived.passPeriod * 12;

    let topX = (1 + monthlyInterest) ** period;
    topX = monthlyInterest * topX;

    let bottomX = (1 + monthlyInterest) ** period;
    bottomX = bottomX - 1;

    let solution = dataReceived.passAmount * (topX / bottomX);
    console.log(solution);
    console.log(monthlyInterest);

    setPassObj({
      myPeriod: period,
      mySolution: solution,
      initialSum: dataReceived.passAmount,
    });
  }
  return (
    <>
      <Header></Header>
      <Input outputData={handleData}></Input>
      {status ? <Results passData={passObj} /> : null}
    </>
  );
}

export default App;
