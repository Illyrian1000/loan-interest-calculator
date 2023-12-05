import "./Results.css";

export default function Results({ passData }) {
  let total = passData.myPeriod * passData.mySolution - passData.initialSum;

  let monthlyPayment;

  const formattedNumber = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  return (
    <div className="list-container">
      <ul>
        <li>
          <h2 className="monthly_payment_text">Kesti mujor</h2>
          <h3 className="monthly_payment_text">
            {formattedNumber.format(passData.mySolution)}
          </h3>
        </li>
        <li>
          <h2>Numri i kesteve</h2>
          <h3>{passData.myPeriod}</h3>
        </li>
        <li>
          <h2>Interesi</h2>
          <h3>{formattedNumber.format(total)}</h3>
        </li>
      </ul>
    </div>
  );
}
