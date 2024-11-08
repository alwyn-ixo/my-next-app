import { ClientSection, ServerSection } from '@/components';

export default async function Home() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <ServerSection />
      <ClientSection />
    </div>
  );
}
