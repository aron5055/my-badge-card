import { Badge } from "@/components/ui/badge";
import {
  SiArchlinux,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

export default function SkillsStack({ skills }) {
  const skillIcons = {
    react: <SiReact />,
    nodejs: <SiNodedotjs />,
    typescript: <SiTypescript />,
    tailwindcss: <SiTailwindcss />,
    archlinux: <SiArchlinux />,
  };

  return (
    <div className="flex justify-center gap-2 mt-4 flex-wrap">
      {skills.map(({ id, label }) => (
        <Badge variant={id} key={id} className="text-xs">
          {skillIcons[id]}
          <span className="ml-1">{label}</span>
        </Badge>
      ))}
    </div>
  );
}
