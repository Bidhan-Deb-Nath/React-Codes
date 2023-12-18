/** @format */
// import { useEffect, useState } from "react";

// const useCurrencyInfo = (currency) => {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch(
//       `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//     )
//       .then((response) => response.json())
//       .then((response) => setData(response[currency]));
//   }, [currency]);

//   return data;
// };

// export default useCurrencyInfo;

import { useEffect, useState } from "react";
const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((respons) => respons.json())
      .then((respons) => setData(respons[currency]));
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
