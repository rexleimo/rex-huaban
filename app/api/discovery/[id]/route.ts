import { NextResponse } from "next/server";

export async function POST(request: Request, params: { id: string }) {
  // get query
  const { searchParams } = new URL(request.url);
  const allSearchParams = Object.fromEntries(searchParams);
  // get params
  const id = params.id;
  // get formdata
//   const formdata = await request.formData();
//   const formdataJson = Object.fromEntries(formdata);
  // get json 如果是 formdata 模式下不要请求
  const json = await request.json();
  
  return NextResponse.json({
    allSearchParams,
    id,
    // formdataJson,
    json,
  });
}
