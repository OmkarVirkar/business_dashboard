export default function H1({
  htmlFor,
  className,
  children,
}: {
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-3xl font-bold text-slate-900 dark:text-white ${className}`}
    >
      {children}
    </label>
  );
}
