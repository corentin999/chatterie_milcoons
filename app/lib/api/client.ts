// src/lib/api/client.ts
import createClient from 'openapi-fetch';
import type { paths } from '@/types/openapi';
import { cookies } from 'next/headers';
import { JWT_COOKIE_NAME } from '../auth';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL!;

export const api = async () => {
  const cookiesStore = await cookies()
  const token = cookiesStore.get(JWT_COOKIE_NAME)?.value;
  return createClient<paths>({
    baseUrl,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
};

// Helpers d’usage typé
export async function getCats(query?: { page?: number; limit?: number; status?: 'available'|'reserved'|'sold' }) {
    const currentApi = await api()
    return currentApi.GET('/cats', { params: { query } });
}

export async function getCat(id: number) {
    const currentApi = await api()
    return currentApi.GET('/cats/{id}', { params: { path: { id } } });
}

export async function getPhotos(catId?: number, query?: { page?: number; limit?: number }) {
    const currentApi = await api();
    return currentApi.GET('/photos', { params: { query: { catId, ...query } } });
}
