import { type NextRequest } from 'next/server'
import { randomDelay } from '../common';

/** Fake logout API call */
export async function GET(request: NextRequest) {
  await randomDelay();

  request.cookies.set('login', 'false');
  return Response.json({ login: false })
}