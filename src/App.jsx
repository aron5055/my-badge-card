import { useState, useEffect } from "react";
import BadgeCard from "./components/BadgeCard";
import ThemeProvider from "./contexts/ThemeProvider";
import Spinner from "./components/ui/spinner";
import ErrorMessage from "./components/ErrorMessage";

function App() {
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

  if (status === "loading") return <Spinner />;
  if (status === "error") return <ErrorMessage message={error} />;

  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center bg-background transition-colors duration-300">
        <BadgeCard config={config} />
      </div>
    </ThemeProvider>
  );
}

export default App;
