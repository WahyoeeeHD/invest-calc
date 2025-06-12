import { useState as State } from "react";

import { UserInput as KotakHijau } from "./components/UserInput";
import { Table as Results } from "./components/TableData";

export default function App() {
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
    <>
      <KotakHijau onChangeInput={handleInputChange} userInputData={userInput} />
      <Results />
    </>
  );
}
