import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { LuRefreshCw } from "react-icons/lu";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeProvider";

export function FrontFace({ handleFlip }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Card className="card-face">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <FiSun className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <FiMoon className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Button>
      <CardContent className="p-0 flex-1 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Front Side</h2>
          <p className="text-muted-foreground">Card information goes here</p>
        </div>
      </CardContent>
      <Button
        className="absolute bottom-2 right-2 rounded-full"
        variant="outline"
        size="icon"
        onClick={handleFlip}
      >
        <LuRefreshCw className="h-4 w-4" />
        <span className="sr-only">翻转</span>
      </Button>
    </Card>
  );
}
