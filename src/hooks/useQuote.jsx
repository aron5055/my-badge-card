import { useEffect, useState } from "react";

export default function useQuote(url) {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const cacheKey = "quoteCache";
    const cached = JSON.parse(localStorage.getItem(cacheKey) || null);

    if (cached && cached.date === today) {
      setQuote(cached.quote);
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setQuote(json);
        localStorage.setItem(
          cacheKey,
          JSON.stringify({ date: today, quote: json })
        );
      });
  }, [url]);

  return quote;
}
