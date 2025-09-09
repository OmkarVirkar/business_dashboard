export default function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
      {children}
    </h1>
  );
}
