import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { InputBox } from './components'
import UseCurrencyInfo from './Hooks/Usecurrencyinfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0);
  const[from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const[convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo= UseCurrencyInfo(from); 

  const options = Object.keys(currencyInfo)

  // const swap=()=>{
  //   setFrom(to);
  //   setTo(from);
  //   setConvertedAmount(amount)
  //   setAmount(convertedAmount);
  // }
  const swap = () => {
  setFrom((prevFrom) => {
    setTo(prevFrom);
    return to;
  });
  setAmount(convertedAmount);
  setConvertedAmount(amount);
};

  const convert=()=>{
  setConvertedAmount(amount * currencyInfo[to])
  }

 return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: `url('https://nordicapis.com/wp-content/uploads/10-APIs-For-Currency-Exchange-Rates.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onCurrencyChange={(currency)=>setAmount(currency)}
                                onAmountChange={(amount)=> setAmount(amount)}
                                currencyOptions={options}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="w-full flex justify-center items-center mb-4">
                            <img src={viteLogo} className="h-6" alt="Vite logo" />
                            <img src={reactLogo} className="h-6 ml-2" alt="React logo"
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                onAmountChange={setAmount}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                currencyOptions={options}
                                selectCurrency={to}
                                amountDisabled={true}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default App
