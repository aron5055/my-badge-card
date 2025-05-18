import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import useTheme from "@/contexts/useTheme";
import { FiMoon, FiSun, FiRefreshCcw } from "react-icons/fi";
import CodeTimeWidget from "./CodeTimeWidget/CodeTimeWidget";
import useWakaTime from "@/hooks/useWakaTime";
import useQuote from "@/hooks/useQuote";
import QuoteWidge from "./QuoteWidget/QuoteWidge";

export function BackFace({ config, handleFlip }) {
  const { theme, toggleTheme } = useTheme();
  const time = useWakaTime(config.wakaTimeUrl);
  const quote = useQuote(config.quoteUrl);

  return (
    <Card className="card-face back-face">
      {/* Theme toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10 hover:bg-transparent"
        aria-label="Toggle theme"
        title="切换主题-Toggle theme"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </Button>

      {/* Main content area */}
      <CardContent className="p-4 flex-1 flex flex-col items-center justify-center">
        <div className="w-full">
          <QuoteWidge quote={quote} />
        </div>

        <div className="w-full mt-auto">
          <CodeTimeWidget time={time} />
        </div>
      </CardContent>

      {/* Flip button */}
      <Button
        className="absolute bottom-2 right-2 hover:bg-transparent"
        variant="ghost"
        size="icon"
        aria-label="Flip card"
        onClick={handleFlip}
      >
        <FiRefreshCcw />
        <span className="sr-only">翻转-Flip</span>
      </Button>
    </Card>
  );
}
