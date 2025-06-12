export function UserInput({ onChangeInput, userInputData }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input
            type="number"
            name="initial"
            required
            value={userInputData.initialInvestment}
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input
            type="number"
            name="annual"
            required
            value={userInputData.annualInvestment}
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="return">Expected Return</label>
          <input
            type="number"
            name="return"
            value={userInputData.expectedReturn}
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            value={userInputData.duration}
            onChange={(e) => onChangeInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
