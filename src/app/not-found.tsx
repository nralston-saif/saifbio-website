import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>
      <Link href="/" className="btn btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}
