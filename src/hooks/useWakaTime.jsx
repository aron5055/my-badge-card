import { useEffect, useState } from "react";

export default function useWakaTime(url) {
  const [result, setResult] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const cacheKey = "wakaTimeSummaryCache";
    const cached = JSON.parse(localStorage.getItem(cacheKey) || null);

    if (cached && cached.date === today) {
      setResult(cached.result);
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((wakaData) => {
        const totalSeconds = wakaData.data.reduce((sum, day) => {
          return sum + (day.grand_total?.total_seconds || 0);
        }, 0);

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const result = `${hours}h ${minutes}m`;

        setResult(result);
        localStorage.setItem(cacheKey, JSON.stringify({ date: today, result }));
      });
  }, [url]);

  return result;
}
