import { useEffect, useState } from 'react';
import { GIST_URL } from '../config';
import type { PortfolioData } from '../types';

interface UsePortfolioDataResult {
    data: PortfolioData | null;
    loading: boolean;
    error: string | null;
}

export function usePortfolioData(): UsePortfolioDataResult {
    const [data, setData] = useState<PortfolioData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const res = await fetch(GIST_URL);
                if (!res.ok) {
                    throw new Error(`HTTP ${res.status} ${res.statusText}`);
                }
                const json: PortfolioData = await res.json();
                if (!cancelled) {
                    setData(json);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err instanceof Error ? err.message : String(err));
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        load();
        return () => { cancelled = true; };
    }, []);

    return { data, loading, error };
}
