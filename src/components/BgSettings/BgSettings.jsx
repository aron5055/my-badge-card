import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Separator } from "../ui/separator";
import { Slider } from "../ui/slider";
import { ColorPalette } from "./ColorPalette";
import patterns from "@/lib/patternStyle";
import PatternBlock from "./PatternBlock";
import { RxColumnSpacing } from "react-icons/rx";

export default function BgSettings() {
  const [color, setColor] = useState({ c1: "#e5e5f7", c2: "#444cf7" });

  const colors = [
    { c1: "#e5e5f7", c2: "#444cf7" },
    { c1: "#f5f5e5", c2: "#d4c04a" },
    { c1: "#2E2E2E", c2: "#1E1E1E" },
  ];

  const patternArr = Object.keys(patterns).map((key) => {
    const pattern = patterns[key];
    return {
      name: key,
      style: pattern(color.c1, color.c2),
    };
  });

  return (
    <Popover>
      <PopoverTrigger className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 shadow-md transition-colors">
        <FiSettings size={20} className="text-gray-600 dark:text-gray-300" />
      </PopoverTrigger>
      <PopoverContent className="mr-2">
        <div className="p-2">
          <h3 className="text-sm text-center font-medium mb-4">背景色设置</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {colors.map((color) => (
              <Button
                key={color.c1}
                variant="ghost"
                onClick={() => setColor({ ...color })}
              >
                <ColorPalette color={color} />
              </Button>
            ))}
          </div>
          <Separator className="mt-6" />
          <h3 className="text-sm text-center font-medium mb-4 mt-4">
            背景图案设置
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {patternArr.map(({ name, style }) => (
              <PatternBlock key={name} pattern={style} />
            ))}
          </div>
          <div className="flex items-center mt-6 mb-2 px-2">
            <div className="flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full p-1.5 mr-2">
              <RxColumnSpacing
                size={14}
                className="text-slate-600 dark:text-slate-300"
              />
            </div>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mr-3">
              间隔:
            </span>
            <Slider
              className="w-3/5 flex-grow mt-0.5 bg-blue-200 focus:bg-blue-400"
              defaultValue={[20]}
              max={50}
              step={1}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
