import { calculateInvestmentResults } from "../util/investment";

export function Table({ inputData }) {
  const resultsData = calculateInvestmentResults(inputData);
  console.log(resultsData);

  return (
    <table id="result" className="center border border-black">
      <thead>
        <tr>
          <th>kocak</th>
          <th>geming</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>kocak</td>
          <td>bejir bat</td>
        </tr>
      </tbody>
    </table>
  );
}
