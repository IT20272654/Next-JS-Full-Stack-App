// app/api/users/route.ts
import { connectToDB } from '@/lib/mongodb';
import { User } from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectToDB();
  const users = await User.find();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();
  await connectToDB();
  const newUser = await User.create(body);
  return NextResponse.json(newUser);
}
