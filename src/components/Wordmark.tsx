import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-[family-name:var(--font-montserrat)] tracking-tight",
        className
      )}
    >
      S<span className="font-bold">AI</span>F
      <span className="font-medium text-green-700">bio</span>
    </span>
  );
}
