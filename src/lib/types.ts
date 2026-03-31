export interface Position {
  coin: string;
  szi: string;
  entryPx: string;
  positionValue: string;
  unrealizedPnl: string;
  leverage: { type: string; value: number };
}

export interface Fill {
  coin: string;
  px: string;
  sz: string;
  side: string;
  time: number;
  startPosition: string;
  dir: string;
  closedPnl: string;
  hash: string;
  oid: number;
  crossed: boolean;
  fee: string;
  tid: number;
}

export interface ClearinghouseState {
  marginSummary: {
    accountValue: string;
    totalNtlPos: string;
    totalRawUsd: string;
  };
  assetPositions: Array<{
    type: string;
    position: Position;
  }>;
}

export interface FollowerInfo {
  address: string;
  correlatedTrades: number;
  avgLagMs: number;
  estimatedCopySize: string;
}

export interface ExposureResult {
  totalFollowers: number;
  avgLagMs: number;
  estimatedLeakageBps: number;
  followers: FollowerInfo[];
  accountValue: number;
  openPositions: number;
  recentFills: number;
  scanPeriodDays: number;
  isEstimate: boolean;
  analysisMode: "perp" | "spot";
}

export interface SpotBalance {
  coin: string;
  token: number;
  hold: string;
  total: string;
  entryNtl: string;
}

export interface SpotClearinghouseState {
  balances: SpotBalance[];
}

export interface SpotMeta {
  tokens: Array<{ index: number; name: string }>;
  universe: Array<{ tokens: [number, number]; name: string }>;
}


export interface SignupData {
  address: string;
  email?: string;
  volumeRange: string;
}

export interface DbTrade {
  ts: string;
  coin: string;
  side: string;
  px: number;
  sz: number;
  hash: string;
  tid: number;
  buyer: string;
  seller: string;
}

// ============================================================
// Vault types
// ============================================================

export interface VaultSummary {
  name: string;
  vaultAddress: string;
  leader: string;
  tvl: string;
  isClosed: boolean;
  createTimeMillis: number;
}

export interface VaultFollower {
  user: string;
  vaultEquity: string;
  pnl: string;
  allTimePnl: string;
  daysFollowing: number;
}

export interface VaultDetails {
  leader: string;
  name: string;
  tvl: string;
  apr: number;
  leaderCommission: number;
  followers: VaultFollower[];
  portfolio: Array<{
    coin: string;
    szi: string;
    entryPx: string;
    positionValue: string;
    unrealizedPnl: string;
  }>;
}

export interface VaultCopierInfo {
  address: string;
  correlatedTrades: number;
  avgLagMs: number;
  isDepositor: boolean;
  depositedAmount: string | null;
}

export interface VaultLeakageResult {
  vaultName: string;
  vaultAddress: string;
  tvl: number;
  depositorCount: number;
  apr: number;
  totalCopiers: number;
  freeRiderCount: number;
  copiers: VaultCopierInfo[];
  estimatedLeakageBps: number;
  estimatedAnnualCost: number;
  recentFills: number;
  scanPeriodDays: number;
  isEstimate: boolean;
}

export interface VaultSignupData {
  address: string;
  vaultAddress: string;
  vaultName?: string;
  email?: string;
  aumRange: string;
}

