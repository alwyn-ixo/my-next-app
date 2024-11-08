type ResultDisplayProps = {
  title: string;
  data: any;
  show: boolean;
};

export const ResultDisplay = ({ title, data, show }: ResultDisplayProps) => {
  if (!data || !show) return null;

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
      <h3 className="font-bold mb-2">{title}</h3>
      <pre className="overflow-auto text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}; 