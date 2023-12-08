import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Results from "./components/Results";

function App() {
  // const [status, setStatus] = useState(false);

  const [passObj, setPassObj] = useState({});
  const [euribor, setEuribor] = useState(4);

  function handleData(dataReceived) {
    let monthlyInterest = dataReceived.passInterest / 100;
    monthlyInterest = monthlyInterest / 12;
    let period = dataReceived.passPeriod * 12;

    let topX = (1 + monthlyInterest) ** period;
    topX = monthlyInterest * topX;

    let bottomX = (1 + monthlyInterest) ** period;
    bottomX = bottomX - 1;

    let solution = dataReceived.passAmount * (topX / bottomX);

    setPassObj({
      myPeriod: period,
      mySolution: solution,
      initialSum: dataReceived.passAmount,
    });
  }

  // EURIBOR API
  const url =
    "https://api.api-ninjas.com/v1/interestrate?X-Api-Key=vb76hb0QdIYJEKjbo6fxvw==3b2RMPJFOYiLPe8A";
  const options = { "X-Api-Key": "YOUR_API_KEY" };

  const response = fetch(url)
    .then((res) => {
      if (res.ok) {
        return res;
      } else {
        throw new Error("API request failed");
      }
    })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      setEuribor(data.non_central_bank_rates[0].rate_pct);
    })
    .catch((err) => {
      console.error(err);
    });

  // try {
  // 	const response = await fetch(url, options);
  // 	const result = await response.text();
  // 	console.log(result);
  // } catch (error) {
  // 	console.error(error);
  // }

  return (
    <div className="main_container">
      <div className="input_group">
        <Header></Header>
        <Input euribor={euribor} outputData={handleData}></Input>
      </div>

      <Results passData={passObj} />
    </div>
  );
}

export default App;
