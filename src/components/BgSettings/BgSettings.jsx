import { FiSettings } from "react-icons/fi";
import { Button } from "../ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Separator } from "../ui/separator";
import { ColorPalette } from "./ColorPalette";
import patternStyles from "@/lib/patternStyles";
import PatternBlock from "./PatternBlock";
import colorThemes from "@/lib/colorThemes";
import SettingsSlider from "./SettingsSlider";

export default function BgSettings({
  color,
  pattern,
  handleColorChange,
  handlePatternChange,
}) {
  return (
    <Popover>
      <PopoverTrigger
        className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 shadow-md transition-colors"
        aria-label="背景设置"
      >
        <FiSettings size={20} className="text-gray-600 dark:text-gray-300" />
      </PopoverTrigger>
      <PopoverContent className="mr-2">
        <div className="p-2">
          <h3 className="text-sm text-center font-medium mb-4">背景色设置</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {colorThemes.map((theme) => (
              <Button
                key={theme.front}
                variant="icon"
                onClick={() => handleColorChange({ ...theme })}
                className="rounded-full w-12 h-12 p-0 overflow-hidden shadow-md active:scale-90 ring-offset-1 transition-transform"
                aria-label={theme.name}
              >
                <ColorPalette color={theme} />
              </Button>
            ))}
          </div>
          <Separator className="mt-6" />
          <h3 className="text-sm text-center font-medium mb-4 mt-4">
            背景图案设置
          </h3>
          <div className="flex flex-wrap gap-5 justify-center">
            {Object.keys(patternStyles).map((name) => {
              const style = patternStyles[name](
                color.back,
                color.front,
                pattern.opacity,
                pattern.spacing
              );
              return (
                <Button
                  key={name}
                  variant="icon"
                  className="w-20 h-20 p-0 rounded-xl overflow-hidden shadow-md active:scale-90 transition-transform"
                  onClick={() =>
                    handlePatternChange({
                      ...pattern,
                      name,
                    })
                  }
                  aria-label={name}
                >
                  <PatternBlock pattern={style} />
                </Button>
              );
            })}
          </div>
          <SettingsSlider
            color={color}
            pattern={pattern}
            handlePatternChange={handlePatternChange}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
