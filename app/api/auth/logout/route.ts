import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  const cookiesStore = await cookies()
  cookiesStore.set({
    name: process.env.JWT_COOKIE_NAME || 'token',
    value: '',
    path: '/',
    maxAge: 0,
  });
  return NextResponse.json({ ok: true });
}
