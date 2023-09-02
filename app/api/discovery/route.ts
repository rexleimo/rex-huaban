import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ code: 0 });
  // return NextResponse.json({ code: 0 }, { status: 500 });
}
export async function POST(request: Request) {
  // get query
  const { searchParams } = new URL(request.url);
  const allSearchParams = Object.fromEntries(searchParams);
  // get formdata
  // const formdata = await request.formData();
  // const formdataJson = Object.fromEntries(formdata);
  // get json 如果是 formdata 模式下不要执行这里
  const json = await request.json();

  return NextResponse.json({
    allSearchParams,
    // formdataJson,
    json,
  });
}
export async function PUT(request: NextRequest) {
  const cookies = request.cookies.getAll();
  // 不推荐 在构建类似 hexo 静态页面(SSG)的时候会报错，说你依赖了cookies无法构建
  // import {cookies} from 'next/headers'
  // const cookie = cookies()

  const headers = request.headers;
  const ContentType = headers.get("Content-Type");
}
export async function DELTE(request: Request) {}
export async function HEAD(request: Request) {}
export async function OPTIONS(request: Request) {}
