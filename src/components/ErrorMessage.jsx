export default function ErrorMessage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-destructive">
      <span className="text-lg font-semibold mb-2">😥 出错了</span>
      <span className="text-sm">{message}</span>
    </div>
  );
}
