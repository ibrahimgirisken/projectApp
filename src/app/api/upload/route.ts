import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { reviseTheText } from '@/lib/reviseTheText';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  const folder = formData.get('folder')?.toString() || 'general';

  if (!file || !folder) {
    return NextResponse.json({ error: 'Eksik dosya veya klasör' }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const cleanedName = reviseTheText(file.name);
  const filename = `${Date.now()}-${cleanedName}`;

  const uploadDir = path.join(process.cwd(), 'public', 'uploads', folder);
  await fs.mkdir(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, filename);
  await fs.writeFile(filePath, buffer);

  return NextResponse.json({ filename });
}
