import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received data:', body);

    const { name, email } = body;
    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'Name and Email are required' }, { status: 400 });
    }

    await dbConnect();
    console.log('Connected to DB');

    const newUser = new User({ name, email });
    await newUser.save();
    console.log('User saved:', newUser);

    return NextResponse.json({ success: true, user: newUser });
  } catch (error: any) {
    console.error('Error in POST /api/users:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
