import "./Results.css";

export default function Results({ passData }) {
  let total = passData.myPeriod * passData.mySolution - passData.initialSum;

  const formattedNumber = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });
  return (
    <div className="list-container">
      <ul>
        <li>Kesti mujor: {formattedNumber.format(passData.mySolution)}</li>
        <li>Numri i kesteve: {passData.myPeriod}</li>
        <li>
          Pagesa totale:{" "}
          {formattedNumber.format(passData.myPeriod * passData.mySolution)}
        </li>
        <li>Interesi: {formattedNumber.format(total)}</li>
      </ul>
    </div>
  );
}
