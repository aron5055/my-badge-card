import { useState, useEffect } from "react";
import BadgeCard from "./components/BadgeCard";
import { ThemeProvider } from "./contexts/ThemeProvider";

function App() {
  const [config, setConfig] = useState({});

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch("/user-config.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.error("Error fetching config:", error);
      }
    };

    fetchConfig();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center bg-background transition-colors duration-300">
        <BadgeCard config={config} />
      </div>
    </ThemeProvider>
  );
}

export default App;
