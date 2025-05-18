import BadgeCard from "./components/BadgeCard";
import ThemeProvider from "./contexts/ThemeProvider";
import Spinner from "./components/ui/spinner";
import ErrorMessage from "./components/ErrorMessage";
import BgSettings from "./components/BgSettings/BgSettings";
import useConfig from "./hooks/useConfig";

function App() {
  const { config, status, error } = useConfig();

  if (status === "loading") return <Spinner />;
  if (status === "error") return <ErrorMessage message={error} />;

  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center transition-colors duration-300">
        <div className="fixed top-4 right-4 z-50">
          <BgSettings />
        </div>
        <BadgeCard config={config} />
      </div>
    </ThemeProvider>
  );
}

export default App;
