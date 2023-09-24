import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // 这里是你要进行保存的文件目录地址
  const filePath = path.join(process.cwd(), "public", "tmp");
  const path1 = path.join(filePath, file.name);
  await writeFile(path1, buffer);
  // 上传阿里云oss
  console.log(`open ${path} to see the uploaded file`);

  return NextResponse.json({ success: true, file: `/tmp/${file.name}` });
}
