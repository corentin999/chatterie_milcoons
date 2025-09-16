// app/admin/cats/CreateCatForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCatForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const body = {
      name: fd.get("name"),
      description: fd.get("description"),
      status: fd.get("status") || "available",
    };

    const res = await fetch("/api/admin/cats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setLoading(false);
    if (!res.ok) {
      setErr(await res.text());
      return;
    }

    setOpen(false);
    router.refresh();
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-xl bg-gray-900 text-white"
      >
        + Nouveau chat
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <form
            onSubmit={onSubmit}
            className="w-full max-w-md rounded-2xl bg-white p-6 space-y-4"
          >
            <h2 className="text-lg font-semibold">Créer un chat</h2>
            <input
              name="name"
              placeholder="Nom"
              required
              className="w-full rounded-xl border px-4 py-2"
            />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full rounded-xl border px-4 py-2 h-28"
            />
            <select
              name="status"
              className="w-full rounded-xl border px-4 py-2"
              defaultValue="available"
            >
              <option value="available">available</option>
              <option value="reserved">reserved</option>
              <option value="sold">sold</option>
            </select>

            {err && <p className="text-red-600 text-sm">{err}</p>}

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-xl border"
              >
                Annuler
              </button>
              <button
                disabled={loading}
                className="px-4 py-2 rounded-xl bg-gray-900 text-white"
              >
                {loading ? "Création..." : "Créer"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
