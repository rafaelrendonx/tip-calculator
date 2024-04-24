import { useState } from "react"
import billImage from '../images/icon-dollar.svg'
import personImage from '../images/icon-person.svg'

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

      <div className="">
        <h1 className="text-dark-grayish-cyan text-2xl text-center px-32 py-10 tracking-tighter">S P L I T T E R</h1>
      </div>

      {/*Cuadro blanco*/}
      <main className=" bg-white p-8 rounded-t-3xl">
        {/*Bill*/}
        <div className="flex flex-col pb-[32px]">
          <label htmlFor="bill" className="text-dark-grayish-cyan pb-[6px]">Bill</label>

          <div className="relative rounded-md border">
            <input type="text" value={bill} onChange={handleBill} id="bill"
              className="rounded-md py-[6.75px] bg-very-light-grayish-cyan text-very-dark-cyan text-2xl text-right pr-2" />
            <div className="absolute inset-y-0 pl-4 flex items-center pointer-events-none bg-very-light-grayish-cyan rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
                <path fill="#9EBBBD" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z" />
              </svg>
            </div>
          </div>
        </div>

        {/*Tips*/}
        <div className="pb-[32px]">
          <p className="text-dark-grayish-cyan pb-4">Select Tip %</p>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => handleTip(5, 0)}
              className={[0 === selectedTip ? "bg-strong-cyan text-white text-2xl rounded-md p-[8px]" : "bg-very-dark-cyan text-white text-2xl rounded-md p-[8px]"]}>
              5%
            </button>
            <button onClick={() => handleTip(10, 1)}
              className={[1 === selectedTip ? "bg-strong-cyan text-white text-2xl rounded-md p-[8px]" : "bg-very-dark-cyan text-white text-2xl rounded-md p-[8px]"]}>
              10%
            </button>
            <button onClick={() => handleTip(15, 2)}
              className={[2 === selectedTip ? "bg-strong-cyan text-white text-2xl rounded-md p-[8px]" : "bg-very-dark-cyan text-white text-2xl rounded-md p-[8px]"]}>
              15%
            </button>
            <button onClick={() => handleTip(25, 3)}
              className={[3 === selectedTip ? "bg-strong-cyan text-white text-2xl rounded-md p-[8px]" : "bg-very-dark-cyan text-white text-2xl rounded-md p-[8px]"]}>
              25%
            </button>
            <button onClick={() => handleTip(50, 4)}
              className={[4 === selectedTip ? "bg-strong-cyan text-white text-2xl rounded-md p-[8px]" : "bg-very-dark-cyan text-white text-2xl rounded-md p-[8px]"]}>
              50%
            </button>
            <input type="text" value={customTip} onChange={handleCustomTip} placeholder="Custom" onClick={() => handleTip(customTip, 5)} id="custom"
              className="text-very-dark-cyan text-right text-2xl bg-very-light-grayish-cyan placeholder:text-center placeholder:text-very-dark-cyan p-[8px] rounded-md" />
          </div>
        </div>

        {/*People*/}
        <div className="flex flex-col">
          <label htmlFor="people" className="text-dark-grayish-cyan pb-[6.75px]">Number of People</label>

          <div className="relative rounded-md border">
            <input type="text" value={people} onChange={handlePeople} id="people"
              className="rounded-md py-[6.75px] bg-very-light-grayish-cyan text-very-dark-cyan text-2xl text-right pr-2" />
            <div className="absolute inset-y-0 pl-4 flex items-center pointer-events-none bg-very-light-grayish-cyan rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16">
                <path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z" />
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/*Cuadro verde*/}
      <section className="bg-white px-6">
        <div className="bg-very-dark-cyan rounded-xl pt-10 px-7 pb-[24px]">
          <div className="flex flex-row justify-between pb-5">
            <div className="pb-1">
              <p className="text-white">Tip Amount</p>
              <p className="text-dark-grayish-cyan text-sm">/ person</p>
            </div>
            <p className="text-strong-cyan text-3xl">$
              {selectedTip === 5 ? customTipAmountPerPerson :
                (tipAmountPerPerson === Infinity ? 'calculating' : tipAmountPerPerson)
              }
            </p>
          </div>
          <div className="flex flex-row justify-between pb-[29px]">
            <div className="pb-1">
              <p className="text-white">Total </p>
              <p className="text-dark-grayish-cyan text-sm">/ person</p>
            </div>
            <p className="text-strong-cyan text-3xl">$
              {selectedTip === 5 ? customTotalAmountPerPerson :
                (totalAmountPerPerson === Infinity ? 'calculating' : totalAmountPerPerson)}

            </p>
          </div>
          <button className="bg-strong-cyan text-xl rounded-md px-[108px] py-[10px]" onClick={handleReset}>RESET</button>
        </div>

      </section>

    </div>
  )
}

export default App
