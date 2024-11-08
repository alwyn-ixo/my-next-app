// No 'use client' - this is a Server Component
import { fetchChainStatus } from './utils/fetchChainData';
import { ServerDataCard } from './components/ServerDataCard';
import { fetchLatestBlock } from './utils/fetchLatestBlock';

export async function ServerSection() {
  const chainStatus = await fetchChainStatus();
  console.log("chainStatus = ", chainStatus);

  const blockData = await fetchLatestBlock();
  console.log("blockData = ", blockData);

  return (
    <section className="text-center w-full max-w-4xl">
      <h2 className="text-xl font-bold mb-4">Server-Side Chain Queries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <ServerDataCard 
          title="Network ID" 
          data={chainStatus.node_info.network} 
        />
        <ServerDataCard 
          title="Latest Height" 
          data={blockData.height} 
        />
      </div>
    </section>
  );
} 