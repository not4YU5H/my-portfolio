export function CodeBlock({ code }: { code: string }) {
  return (
    <div className="bg-surface-container-lowest p-6 ghost-border overflow-x-auto">
      <pre className="font-headline text-xs md:text-sm leading-relaxed text-secondary/80">
        <code>{code}</code>
      </pre>
    </div>
  );
}
