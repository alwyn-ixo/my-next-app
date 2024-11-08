export async function fetchChainStatus() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_IXO_RPC_URL}/status`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch chain data");
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching chain data:", error);
    return {
      chain_id: "Error fetching",
      latest_block_height: "Error fetching",
    };
  }
}
