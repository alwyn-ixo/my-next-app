interface ServerDataCardProps {
  title: string;
  data: string | number;
}

export function ServerDataCard({ title, data }: ServerDataCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
      <h3 className="font-bold mb-2">{title}</h3>
      <pre className="overflow-auto text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
} 