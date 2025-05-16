import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { LuRefreshCw } from "react-icons/lu";
import { FiMoon, FiSun } from "react-icons/fi";
import useTheme from "@/contexts/useTheme";
import RingAvatar from "../RingAvatar";

export function FrontFace({ config, handleFlip }) {
  const { theme, toggleTheme } = useTheme();
  const { name, status, bio, skills } = config;
  const { email, blog, github } = config;

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
      <CardContent className="p-0 flex flex-col items-center justify-start">
        <RingAvatar email={email} />
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
      <div className="absolute bottom-2 left-[30%] bg-slate-300 w-[120px] h-2 opacity-90 rounded-[999px]"></div>
    </Card>
  );
}
