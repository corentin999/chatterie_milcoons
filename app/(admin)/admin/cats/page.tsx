/* eslint-disable @typescript-eslint/no-explicit-any */
// app/admin/cats/page.tsx
import Link from "next/link";
import { api as serverApi } from "@/lib/api/client";
import CreateCatForm from "./CreateCatForm";
import CatRow from "./CatRow";

export default async function AdminCatsPage() {
  const api = await serverApi();
  const { data, error } = await api.GET("/cats", { params: { query: { page: 1, limit: 50 } } });

  if (error) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Chats (admin)</h1>
        <p className="text-red-600">Erreur de chargement: {String(error)}</p>
      </div>
    );
  }

  const cats = (data as any)?.data  ?? [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Chats</h1>
        <CreateCatForm />
      </div>

      <div className="overflow-hidden rounded-2xl border">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3">Nom</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Photos</th>
              <th className="px-4 py-3 w-40">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cats.map((c: any) => (
              <CatRow key={c.id} cat={c} />
            ))}
            {cats.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-gray-500" colSpan={4}>
                  Aucun chat pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
