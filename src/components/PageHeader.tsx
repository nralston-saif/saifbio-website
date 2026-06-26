import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  intro,
  className,
}: {
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={cn("border-b py-16 sm:py-20", className)}>
      <div className="container">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
        )}
      </div>
    </div>
  );
}
