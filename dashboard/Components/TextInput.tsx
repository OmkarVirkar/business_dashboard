export default function TextInput({
  id,
  name,
  type,
  autoComplete,
  required,
  className,
  placeholder,
  value,
}: {
  id?: string;
  name?: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  value?: string;
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      required={required || false}
      className={`text-3xl font-bold text-slate-900 dark:text-white ${
        className || ""
      }`}
      placeholder={placeholder}
      defaultValue={value}
    />
  );
}
