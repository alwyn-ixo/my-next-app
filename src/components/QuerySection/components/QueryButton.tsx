type QueryButtonProps = {
  onClick: () => void;
  label: string;
};

export const QueryButton = ({ onClick, label }: QueryButtonProps) => (
  <button
    onClick={onClick}
    className="bg-black/[.05] dark:bg-white/[.06] px-4 py-2 rounded hover:bg-black/[.1] dark:hover:bg-white/[.1]"
  >
    {label}
  </button>
); 