import { useEffect, useState } from "react";

export default function useQuote(url) {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const cacheKey = "quoteCache";
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      try {
        const { date, quote } = JSON.parse(cached);
        if (date === today) {
          setQuote(quote);
          return;
        }
      } catch (error) {
        console.error("Error parsing cached quote:", error);
      }
    }

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setQuote(json);
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ date: today, quote: json })
        );
      })
      .catch((err) => {
        console.error(err);
        setQuote({ text: "Error fetching quote", author: "Unknown" });
      });
  }, [url]);

  return quote;
}
