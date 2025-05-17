import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import useTheme from "@/contexts/useTheme";
import RingAvatar from "./Avatar/RingAvatar";
import SocialLinks from "./SocialLinks/SocialLinks";
import { FiMoon, FiSun, FiRefreshCcw } from "react-icons/fi";
import SkillsStack from "./SkillsStack/SkillsStack";

export function FrontFace({ config, handleFlip }) {
  const { theme, toggleTheme } = useTheme();
  const { name, status, skills, email } = config;

  return (
    <Card className="card-face">
      {/* Theme toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 z-10"
        onClick={toggleTheme}
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </Button>

      {/* Avatar content */}
      <CardContent className="p-0 flex flex-col items-center py-4">
        <div className="mb-2">
          <RingAvatar email={email} theme={theme} handleFlip={handleFlip} />
        </div>
        <p className="text-2xl font-bold mb-4">{name}</p>
        <Badge className="text-sm mb-4">
          <div className="rounded-full bg-green-500 w-2 h-2 mr-2 shadow-[0_0_6px_1px_rgba(74,222,128,0.6)]"></div>
          {status}
        </Badge>
        <div className="mb-4">
          <SkillsStack skills={skills} />
        </div>
        <div className="mt-4">
          <SocialLinks config={config} />
        </div>
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

      {/* Bottom indicator */}
      <div className="absolute bottom-2 left-1/2 translate-x-[-50%] bg-slate-300 dark:bg-slate-600 w-[120px] h-2 opacity-90 rounded-[999px]"></div>
    </Card>
  );
}
