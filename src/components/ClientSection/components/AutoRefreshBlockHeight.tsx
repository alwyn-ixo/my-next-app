'use client';

import { useState, useEffect } from 'react';
import { ServerDataCard } from '../../ServerSection/components/ServerDataCard';

export function AutoRefreshBlockHeight() {
  const [blockData, setBlockData] = useState<any>(null);

  useEffect(() => {
    // Initial fetch
    fetchBlock();

    // Set up interval
    const interval = setInterval(fetchBlock, 6000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  async function fetchBlock() {
    try {
      const response = await fetch('/api/latest-block');  // We'll need to create this API route
      const data = await response.json();
      setBlockData(data);
    } catch (error) {
      console.error('Error fetching block:', error);
    }
  }

  return (
    <ServerDataCard 
      title="Latest Height (Auto-refresh)" 
      data={blockData?.height ?? 'Loading...'} 
    />
  );
} 