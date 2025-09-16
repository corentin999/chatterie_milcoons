// app/admin/cats/CatRow.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CatRow({ cat }: { cat: { id: string; name: string; status?: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onDelete() {
    if (!confirm(`Supprimer ${cat.name} ?`)) return;
    setLoading(true);
    const res = await fetch(`/api/admin/cats/${cat.id}`, { method: "DELETE" });
    setLoading(false);
    if (res.ok) router.refresh();
    else alert("Suppression impossible");
  }

  return (
    <tr className="border-t">
      <td className="px-4 py-3 font-medium">{cat.name}</td>
      <td className="px-4 py-3">
        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">{cat.status || "—"}</span>
      </td>
      <td className="px-4 py-3">
        <Link className="underline" href={`/admin/cats/${cat.id}/photos`}>
          Gérer les photos
        </Link>
      </td>
      <td className="px-4 py-3">
        <div className="flex gap-2">
          {/* Bouton edit à ajouter plus tard */}
          <button
            onClick={onDelete}
            disabled={loading}
            className="px-3 py-1.5 rounded-xl border text-red-600"
          >
            {loading ? "…" : "Supprimer"}
          </button>
        </div>
      </td>
    </tr>
  );
}
