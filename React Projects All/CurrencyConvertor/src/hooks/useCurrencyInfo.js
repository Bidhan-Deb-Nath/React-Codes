/** @format */
import { useEffect, useState } from "react";
const useCurrencyInfo = (currency) => {
  useEffect(() => {
    const [data, setData] = useState({});
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((respons) => respons.json())
      .then((respons) => setData(respons[currency]));
    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
};

export default useCurrencyInfo;
