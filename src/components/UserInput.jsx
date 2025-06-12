import { useState as State } from "react";

export function UserInput() {
  const [userInput, setUserInput] = State({
    initialInvestment: 1200,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newValue) {
    // karena data yang ada di input harus berdasarkan data yang sudah ada atau sebelumnya , maka kita harus menggunakan function dalam function biar datanya muncul!
    setUserInput((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input
            type="number"
            name="initial"
            required
            value={userInput.initialInvestment}
            onChange={(e) =>
              handleInputChange("initialInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input
            type="number"
            name="annual"
            required
            value={userInput.annualInvestment}
            onChange={(e) =>
              handleInputChange("annualInvestment", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="return">Expected Return</label>
          <input
            type="number"
            name="return"
            value={userInput.expectedReturn}
            onChange={(e) =>
              handleInputChange("expectedReturn", e.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            value={userInput.duration}
            onChange={(e) => handleInputChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
