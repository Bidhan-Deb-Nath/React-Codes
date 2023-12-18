/** @format */
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputNumber from "./components/InputNumber";
import ima from "./assets/images/currency.png";
const App = () => {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => setConvertedAmount(amount * currencyInfo[to]);
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${ima}')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto borger border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <h1 className="text-center text-white text-2xl mb-1">
              Currency Convertor
            </h1>

            <form
              onSubmit={(value) => {
                value.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputNumber
                  label="From"
                  amount={amount}
                  placeholderAnother={"Give the Amount"}
                  currencyOptions={options}
                  // onChangeCurrency={(currency) => setFrom(currency)}
                  onChangeAmount={(amount) => setAmount(amount)}
                  selectCurrency={from.toUpperCase()}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  {" "}
                  Swap
                </button>
              </div>

              <div className="w-full mt-1 mb-4">
                <InputNumber
                  label="To"
                  amount={convertedAmount}
                  placeholderAnother={"Convert the Amount"}
                  currencyOptions={options}
                  onChangeCurrency={(currency) => setTo(currency)}
                  selectCurrency={to.toUpperCase()} // Change this line to use 'to' instead of 'from'
                  amountDisable
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              >
                Convert {from.toUpperCase()} To {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
