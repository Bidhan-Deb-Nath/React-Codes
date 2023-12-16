/** @format */

const InputNumber = ({
  label,
  className = "",
  amount,
  amountDisable = false,
  onChangeAmount,
  onChangeCurrency,
  currencyOption = [],
  currencyDisable = false,
  selectCurrency = "usd",
}) => {
  return (
    <div>
      <div className={`bg-white p-3 rounded-md text-sm flex ${className}`}>
        <div className="w-1/2">
          <label className="text-black/40 mb-2 inline-block">{label}</label>
          <input
            type="number"
            placeholder="Amount"
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
          {/* <select className="outline-none w-full h-8 bg-transparent text-xs font-semibold text-center"></select> */}

          <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
            <option value="usd">USD</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default InputNumber;
