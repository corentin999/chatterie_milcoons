// app/api/admin/cats/[id]/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const token = (await cookies()).get(process.env.JWT_COOKIE_NAME || "token")?.value;

  const r = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cats/${params.id}`, {
    method: "DELETE",
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  const data = await r.json().catch(() => ({}));
  return NextResponse.json(data, { status: r.status });
}
