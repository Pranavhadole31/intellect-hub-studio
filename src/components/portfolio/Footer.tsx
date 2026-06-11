export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Pranav Hadole. Built with care.</p>
        <p className="font-mono text-xs">
          designed & coded · <span className="text-foreground">v1.0</span>
        </p>
      </div>
    </footer>
  );
}