import BadgeCard from "./components/BadgeCard";
import ThemeProvider from "./contexts/ThemeProvider";
import Spinner from "./components/ui/spinner";
import ErrorMessage from "./components/ErrorMessage";
import BgSettings from "./components/BgSettings/BgSettings";
import useConfig from "./hooks/useConfig";
import useBgSettings from "./hooks/useBgSettings";
import patternStyles from "./lib/patternStyles";

function App() {
  const { config, status, error } = useConfig();
  const { color, setColor, patternConfig, setPatternConfig } = useBgSettings();

  if (status === "loading") return <Spinner />;
  if (status === "error") return <ErrorMessage message={error} />;

  const patternStyle = patternStyles[patternConfig.name](
    color.back,
    color.front,
    patternConfig.opacity,
    patternConfig.spacing
  );

  return (
    <ThemeProvider>
      <div
        className="min-h-screen flex items-center justify-center transition-colors duration-300"
        style={patternStyle}
      >
        <BadgeCard config={config} />
        <div className="fixed top-4 right-4 z-50">
          <BgSettings
            color={color}
            pattern={patternConfig}
            handlePatternChange={setPatternConfig}
            handleColorChange={setColor}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
