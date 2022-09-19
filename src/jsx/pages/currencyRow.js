import React from "react";

function currencyRow({
  onchangeAmount,
  amount,
  currencyOptions,
  selectedCurrency,
  onchangeCurrency
}) {
  return (
    <div className="input-group mb-3">
      <input name="usd_amount" className="form-control" type="number" value={amount} onChange={onchangeAmount} />
      <select  name='currency' className="form-control" value={selectedCurrency} onChange={onchangeCurrency}>
        {currencyOptions.map((Option) => (
          <option key={Option} value={Option}>
            {Option}
          </option>
        ))}
      </select>
    </div>
  );
}
export default currencyRow;
