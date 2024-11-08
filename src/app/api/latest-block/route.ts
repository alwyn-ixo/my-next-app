import { fetchLatestBlock } from '@/components/ServerSection/utils/fetchLatestBlock';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await fetchLatestBlock();
  return NextResponse.json(data);
} 