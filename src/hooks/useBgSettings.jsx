import { useState } from "react";
import colorThemes from "@/lib/colorThemes";

export default function useBgSettings() {
  const [color, setColor] = useState(colorThemes[0]); // 默认使用第一个主题
  const [patternConfig, setPatternConfig] = useState({
    name: "polka",
    spacing: 50,
    opacity: 0.8,
  });

  return {
    color,
    setColor,
    patternConfig,
    setPatternConfig,
    colorThemes,
  };
}
