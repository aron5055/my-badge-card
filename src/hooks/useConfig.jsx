import { useEffect, useState } from "react";

export default function useConfig() {
  const [config, setConfig] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./user-config.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network error");
        }
        return res.json();
      })
      .then((data) => {
        setConfig(data);
        setStatus("success");
      })
      .catch((e) => {
        console.error(e);
        setStatus("error");
        setError("Failed to load user configuration");
      });
  }, []);

  return { config, status, error };
}
