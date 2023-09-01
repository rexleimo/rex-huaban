import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // 比如我们对/api不做任何处理
  if (!["/api"].some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }
  // 比如我们对 /demo 进行一下操作，如果没有权限的时候跳转到百度
  if (["/demo"].some((prefix) => pathname.startsWith(prefix))) {
    // handle someing
    return NextResponse.redirect("http://www.baidu.com");
  }
//   比如我们需要做一些日志操作的时候
//   if (request.method === "POST") {
//     console.log(await request.json());
//   }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
// 匹配的路由机制 除非你业务非常简单，要不不推荐使用
// export const config = {
//   matcher: '/:path*',
// }
