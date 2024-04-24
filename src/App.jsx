import { useState } from "react"

function App() {

  //const tips = [5, 10, 15, 25, 50]

  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(1)
  const [tip, setTip] = useState(0)
  const [selectedTip, setSelectedTip] = useState(-1)
  const [customTip, setCustomTip] = useState('')


  const handleBill = (event) => {
    setBill(event.target.value)
  }

  const handlePeople = (event) => {
    setPeople(event.target.value)
  }

  const handleTip = (tipAmount, index) => {
    setTip(tipAmount)
    setSelectedTip(index)
  }

  const handleCustomTip = (event) => {
    const customValue = Number(event.target.value)

    if (customValue === 0) {
      setCustomTip('')
    } else {
      setCustomTip(customValue)
    }

    handleTip(customValue, 5)
  }

  const handleReset = () => {
    setBill(0)
    setPeople(1)
    setTip(0)
    setSelectedTip(-1)
    setCustomTip('')
  }

  /*
  const renderedButtons = tips.map((arrayTip, index) => {
    
    const selectedButton = index === selectedTip

    return (
      <button onClick={() => handleTip(arrayTip, index)}
        className={[selectedButton ? "bg-strong-cyan text-white text-2xl rounded-md" : "bg-very-dark-cyan text-white text-2xl rounded-md"]}>
        {arrayTip}%
      </button>)
  })
*/

  const tipAmountPerPerson = Math.floor((bill * (tip / 100)) / people)
  const totalAmountPerPerson = Math.floor(tipAmountPerPerson + (bill / people))
  const customTipAmountPerPerson = Math.floor((bill * (customTip / 100)) / people)
  const customTotalAmountPerPerson = Math.floor(customTipAmountPerPerson + (bill / people))

  return (
    <div className="font-spaceMono bg-light-grayish-cyan">

      <div className=" p-10">
        <h1 className="text-dark-grayish-cyan text-2xl text-center">S P L I T T E R</h1>
      </div>

      {/*Cuadro blanco*/}
      <main className="p-5 rounded-t-3xl bg-white">
        {/*Bill*/}
        <div className="flex flex-col  pb-5">
          <label htmlFor="bill" className="text-dark-grayish-cyan">Bill</label>
          <input type="text" value={bill} onChange={handleBill} id="bill"
            className="text-very-dark-cyan text-right text-2xl bg-very-light-grayish-cyan" />
        </div>
        {/*Tips*/}
        <div className="pb-5">
          <p className="text-dark-grayish-cyan">Select Tip %</p>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => handleTip(5, 0)}
              className={[0 === selectedTip ? "bg-strong-cyan text-white text-2xl rounded-md" : "bg-very-dark-cyan text-white text-2xl rounded-md"]}>
              5%
            </button>
            <button onClick={() => handleTip(10, 1)}
              className={[1 === selectedTip ? "bg-strong-cyan text-white text-2xl rounded-md" : "bg-very-dark-cyan text-white text-2xl rounded-md"]}>
              10%
            </button>
            <button onClick={() => handleTip(15, 2)}
              className={[2 === selectedTip ? "bg-strong-cyan text-white text-2xl rounded-md" : "bg-very-dark-cyan text-white text-2xl rounded-md"]}>
              15%
            </button>
            <button onClick={() => handleTip(25, 3)}
              className={[3 === selectedTip ? "bg-strong-cyan text-white text-2xl rounded-md" : "bg-very-dark-cyan text-white text-2xl rounded-md"]}>
              25%
            </button>
            <button onClick={() => handleTip(50, 4)}
              className={[4 === selectedTip ? "bg-strong-cyan text-white text-2xl rounded-md" : "bg-very-dark-cyan text-white text-2xl rounded-md"]}>
              50%
            </button>
            <input type="text" value={customTip} onChange={handleCustomTip} placeholder="Custom" onClick={() => handleTip(customTip, 5)} id="custom"
              className="text-very-dark-cyan text-right text-2xl bg-very-light-grayish-cyan placeholder:text-center placeholder:text-very-dark-cyan" />
          </div>
        </div>
        {/*People*/}
        <div className="flex flex-col pb-5">
          <label htmlFor="people" className="text-dark-grayish-cyan">Number of People</label>
          <input type="text" value={people} onChange={handlePeople} id="people"
            className="text-very-dark-cyan text-right text-2xl bg-very-light-grayish-cyan" />
        </div>
        {/*Cuadro verde*/}
        <div className="bg-very-dark-cyan rounded-xl p-5">
          <div className="pb-5 flex flex-row justify-around">
            <p className="text-white">Tip Amount <span className="text-dark-grayish-cyan">/ person</span></p>
            <p className="text-strong-cyan text-3xl">$
              {selectedTip === 5 ? customTipAmountPerPerson :
                (tipAmountPerPerson === Infinity ? 'calculating' : tipAmountPerPerson)
              }
            </p>
          </div>
          <div className="pb-5 flex flex-row justify-around">
            <p className="text-white">Total <span className="text-dark-grayish-cyan">/ person</span></p>
            <p className="text-strong-cyan text-3xl">$
              {selectedTip === 5 ? customTotalAmountPerPerson :
                (totalAmountPerPerson === Infinity ? 'calculating' : totalAmountPerPerson)}

            </p>
          </div>
          <button className="bg-strong-cyan text-xl rounded-md px-28 py-2" onClick={handleReset}>RESET</button>
        </div>
      </main>

    </div>
  )
}

export default App
