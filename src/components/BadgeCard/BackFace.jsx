import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import useTheme from "@/contexts/useTheme";
import { FiMoon, FiSun, FiRefreshCcw } from "react-icons/fi";

export function BackFace({ handleFlip }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Card className="card-face back-face">
      {/* Theme toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </Button>

      {/* Main content area */}
      <CardContent className="p-0 flex-1 flex items-center justify-center">
        {/* Content will be added here */}
      </CardContent>

      {/* Flip button */}
      <Button
        className="absolute bottom-2 right-2 rounded-full"
        variant="ghost"
        size="icon"
        onClick={handleFlip}
      >
        <FiRefreshCcw />
        <span className="sr-only">翻转-Flip</span>
      </Button>
    </Card>
  );
}
