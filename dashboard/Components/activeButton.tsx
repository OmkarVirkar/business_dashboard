export default function ActiveButton({
  disabled,
  onClick,
  children,
  type,
}: {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
  type?: 'submit' | 'button';
}) {
  return (
    <button
      type={type || 'button'}
      className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800 focus:ring-blue-500 dark:focus:ring-purple-500 transition"
      disabled={disabled || false}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
