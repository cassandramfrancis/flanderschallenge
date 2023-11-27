import { type NextRequest, NextResponse } from 'next/server'
import { randomDelay } from '../common';

/** Fake login API call */
export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get('username');
  const password = req.nextUrl.searchParams.get('password');
  
  await randomDelay();

  if (username !== 'MAINT' || password !== 'safetyiskey') {
    return NextResponse.json({error: 'Invalid username or password'}, {status: 401});
  }

  req.cookies.set('login', 'true');

  return NextResponse.json({ login: true });
}