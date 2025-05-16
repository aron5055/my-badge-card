import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { LuRefreshCw } from "react-icons/lu";
import useTheme from "@/contexts/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";

export function BackFace({ handleFlip }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Card className="card-face back-face">
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
      <CardContent className="p-0 flex-1 flex items-center justify-center"></CardContent>
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
