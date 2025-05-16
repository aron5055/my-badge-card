import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import getAvatar from "@/services/getAvatar";

export default function RingAvatar({ email, size = 80 }) {
  const gapSize = size + 6;
  const ringSize = size + 18;
  return (
    <div className="relative" style={{ height: ringSize, width: ringSize }}>
      <div
        className="absolute z-[1] rounded-full"
        style={{
          width: ringSize,
          height: ringSize,
          background:
            "conic-gradient(from 45deg, #4285f4 0% 25%, #34a853 25% 55%, #fbbc05 55% 70%, #ea4335 70% 100%)",
        }}
      ></div>
      <div
        className="absolute z-[2]"
        style={{
          width: gapSize,
          height: gapSize,
        }}
      ></div>
      <div
        className="absolute z-[3] flex items-center justify-center"
        style={{ width: ringSize, height: ringSize }}
      >
        <Avatar style={{ width: size, height: size }}>
          <AvatarImage src={getAvatar(email)} alt="Aron's Avatar" />
          <AvatarFallback>AY</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
