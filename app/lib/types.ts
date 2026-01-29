export type Paste = {
  id: string;
  content: string;
  createdAt: string;

  // optional features
  expires_at?: number;   // timestamp (ms)
  max_views?: number;
  views: number;
};
