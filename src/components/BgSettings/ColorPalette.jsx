export function ColorPalette({ color }) {
  const { back, front } = color;
  return (
    <div
      className="size-full rounded-full border border-gray-300 dark:border-gray-700 shadow-md"
      style={{
        background: `conic-gradient(from 30deg, ${back} 0% 50%, ${front} 50% 100%)`,
      }}
      title={`back: ${back}, front: ${front}`}
    ></div>
  );
}
