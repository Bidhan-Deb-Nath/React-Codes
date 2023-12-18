/** @format */

import { useId } from "react";

const InputNumber = ({
  label,
  className = "",
  amount,
  amountDisable = false,
  onChangeAmount,
  onChangeCurrency,
  currencyOptions = [],
  currencyDisable = false,
  selectCurrency,
  placeholderAnother,
}) => {
  const amountInputId = useId();
  return (
    <div>
      <div className={`bg-white p-3 rounded-md text-sm flex ${className}`}>
        <div className="w-1/2">
          <label
            htmlFor={amountInputId}
            className="text-black/40 mb-2 inline-block"
          >
            {label}
          </label>
          <input
            id={amountInputId}
            type="number"
            placeholder={placeholderAnother}
            disabled={amountDisable}
            value={amount}
            onChange={(event) =>
              onChangeAmount && onChangeAmount(Number(event.target.value))
            }
            className="outline-none w-full bg-transparent py-1.5"
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>

          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(event) =>
              onChangeCurrency && onChangeCurrency(event.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOptions.map((countryRate) => (
              <option key={countryRate} value={countryRate.key}>
                {countryRate.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
