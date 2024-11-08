// No 'use client' - this is a Server Component
import { ServerDataCard } from './components/ServerDataCard';
import { fetchChainStatus, fetchLatestBlock } from './utils';

export async function ServerSection() {
  const [chainStatus, initialBlock] = await Promise.all([
    fetchChainStatus(),
    fetchLatestBlock(),
  ]);
  
  return (
    <section className="text-center w-full max-w-4xl">
      <h2 className="text-xl font-bold mb-4">Server-Side Chain Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <ServerDataCard 
          title="Chain ID" 
          data={chainStatus.chain_id} 
        />
        <ServerDataCard 
          title="Initial Block Height" 
          data={initialBlock.height} 
        />
      </div>
    </section>
  );
} 