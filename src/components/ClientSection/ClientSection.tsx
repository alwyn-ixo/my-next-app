'use client';

import { AutoRefreshBlockHeight } from './components';
import { QueryButton, ResultDisplay, useQueryData } from '../QuerySection';

export const ClientSection = () => {
  const chainStatus = useQueryData('status');
  const blockHeight = useQueryData('block');
  const validators = useQueryData('validators');
  const netInfo = useQueryData('net_info');

  return (
    <div className="min-h-screen p-8">
      <main className="flex flex-col items-center gap-8">
        <section className="text-center w-full max-w-4xl">
          <h2 className="text-xl font-bold mb-4">Client-Side Chain Queries</h2>
                  <AutoRefreshBlockHeight />

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <QueryButton onClick={chainStatus.fetchData} label="Query Chain Status" />
            <QueryButton onClick={blockHeight.fetchData} label="Query Latest Block" />
            <QueryButton onClick={validators.fetchData} label="Query Validators" />
            <QueryButton onClick={netInfo.fetchData} label="Query Network Info" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <ResultDisplay title="Chain Status" data={chainStatus.data} show={chainStatus.show} />
            <ResultDisplay title="Latest Block" data={blockHeight.data} show={blockHeight.show} />
            <ResultDisplay title="Validators" data={validators.data} show={validators.show} />
            <ResultDisplay title="Network Info" data={netInfo.data} show={netInfo.show} />
          </div>
        </section>
        <a
          className="rounded-full bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Docs
        </a>
      </main>
    </div>
  );
}; 