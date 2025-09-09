export default function CheckboxInput({
  id,
  name,
  className,
  disabled,
  onChange,
  checked,
}: {
  id?: string;
  name?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}) {
  return (
    <input
      id={id}
      name={name}
      type="checkbox"
      className={`h-4 w-4 rounded bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-blue-600 dark:text-purple-600 focus:ring-blue-500 dark:focus:ring-purple-500 ${className}`}
      disabled={disabled ?? false}
      onChange={onChange}
      checked={checked}
    />
  );
}
