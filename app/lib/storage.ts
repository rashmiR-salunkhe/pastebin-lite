export interface Paste {
  id: string;
  content: string;
  createdAt: string;
  views: number;
  expires_at?: number;
  max_views?: number;
}

class InMemoryStorage {
  private store = new Map<string, Paste>();

  async get(key: string): Promise<Paste | null> {
    return this.store.get(key) ?? null;
  }

  async set(key: string, value: Paste): Promise<void> {
    this.store.set(key, value);
  }
}

export const storage = new InMemoryStorage();
