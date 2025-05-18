import { Slider } from "../ui/slider";
import { RxColumnSpacing } from "react-icons/rx";
import { PiDropHalfDuotone } from "react-icons/pi";

export default function SettingsSlider({
  color,
  pattern,
  handlePatternChange,
}) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto mt-6">
      <div className="flex items-center gap-2">
        <RxColumnSpacing className="text-slate-600 dark:text-slate-200" />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200 w-16">
          图案密度
        </span>
        <Slider
          className="w-3/5 flex-grow mt-0.5"
          value={[pattern.spacing]}
          onValueChange={(value) => {
            handlePatternChange({
              ...pattern,
              spacing: value[0],
            });
          }}
          defaultValue={[50]}
          min={40}
          max={100}
          step={10}
          color={color}
        />
      </div>
      <div className="flex items-center gap-2">
        <PiDropHalfDuotone className="text-slate-600 dark:text-slate-200" />
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200 w-16">
          透明度
        </span>
        <Slider
          className="w-3/5 flex-grow mt-0.5"
          value={[pattern.opacity]}
          onValueChange={(value) => {
            handlePatternChange({
              ...pattern,
              opacity: value[0],
            });
          }}
          defaultValue={[0.8]}
          min={0.1}
          max={1}
          step={0.1}
          color={color}
        />
      </div>
    </div>
  );
}
