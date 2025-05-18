export function ColorPalette({ color }) {
  const { c1, c2 } = color;
  return (
    <div
      className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 shadow-md"
      style={{
        background: `conic-gradient(from 30deg, ${c1} 0% 50%, ${c2} 50% 100%)`,
      }}
      title={`Color 1: ${c1}, Color 2: ${c2}`}
    ></div>
  );
}
