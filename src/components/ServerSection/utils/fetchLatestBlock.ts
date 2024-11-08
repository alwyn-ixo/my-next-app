export async function fetchLatestBlock() {
  try {
    const response = await fetch("https://ixo-rpc.ibs.team/block", {
      next: { revalidate: 5 }, // Revalidate more frequently for block height
    });

    if (!response.ok) {
      throw new Error("Failed to fetch latest block");
    }

    const data = await response.json();
    return {
      height: data.result.block.header.height,
      time: data.result.block.header.time,
      num_txs: data.result.block.data.txs?.length ?? 0,
    };
  } catch (error) {
    console.error("Error fetching latest block:", error);
    return {
      height: "Error fetching",
      time: "Error fetching",
      num_txs: "Error fetching",
    };
  }
}
