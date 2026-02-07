import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params; 

  try {
    const res = await fetch(`http://localhost:8081/schools/${id}`); 
    if (!res.ok) {
      return NextResponse.error();
    }
    const data = await res.json();
    console.log(data);
    return NextResponse.json(data); 
  } catch (error) {
    return NextResponse.error();
  }
}
