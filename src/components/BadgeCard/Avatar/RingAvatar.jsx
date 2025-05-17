import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import getAvatar from "@/lib/getAvatar";

export default function RingAvatar({ email, theme, size = 75 }) {
  const gapSize = size + 6;
  const ringSize = size + 16;
  const devicePixelRatio = window.devicePixelRatio || 1;
  const imgSize = size * devicePixelRatio;

  return (
    <div
      className="grid place-items-center rounded-full"
      style={{ height: ringSize, width: ringSize }}
    >
      <div
        className="col-start-1 row-start-1 z-[1] rounded-full"
        style={{
          width: ringSize,
          height: ringSize,
          background:
            "conic-gradient(from 45deg, var(--goblue) 0% 25%, var(--gogreen) 25% 55%, var(--goyellow) 55% 70%, var(--gored) 70% 100%)",
        }}
      ></div>
      <div
        className="col-start-1 row-start-1 z-[2] rounded-full"
        style={{
          width: gapSize,
          height: gapSize,
          background: theme === "dark" ? "#1e293b" : "#f8fafb",
        }}
      ></div>

      <div
        className="col-start-1 row-start-1 z-[3] flex items-center justify-center"
        style={{ width: ringSize, height: ringSize }}
      >
        <Avatar style={{ width: size, height: size }}>
          <AvatarImage src={getAvatar(email, imgSize)} alt="Aron's Avatar" />
          <AvatarFallback>AY</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
