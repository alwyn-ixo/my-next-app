import { ClientSection } from '@/components/ClientSection';
import { ServerSection } from '@/components/ServerSection';

export default async function Home() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <ServerSection />
      <ClientSection />
    </div>
  );
}
