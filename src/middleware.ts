// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') || '';
  const isMobile = /Mobi|Android|iPhone/i.test(ua);

  const pathname = request.nextUrl.pathname;
    
      // 只处理顶级路径 /home /about /contact 等
  const targetPaths = ['/home', '/about', '/contact', '/products', '/services', '/terms'];

  for (const path of targetPaths) {
    if (pathname === path || pathname.startsWith(path + '/')) {
      const newPath = isMobile ? `/mobile${pathname}` : `/pc${pathname}`;
      return NextResponse.rewrite(new URL(newPath, request.url));
    }
  }
  // 如果访问的是根路径或通用路径
  // if (pathname === '/' || pathname.startsWith('/pc') || pathname.startsWith('/mobile')) {
  //   const redirectUrl = new URL(isMobile ? `/mobile${pathname}` : `/pc${pathname}`, request.url);
  //   return NextResponse.rewrite(redirectUrl);
  // }

  return NextResponse.next();
}

// 监听所有这些路径的请求
export const config = {
  matcher: ['/home/:path*', '/about/:path*', '/contact/:path*', '/products/:path*', '/services/:path*', '/terms/:path*'],
};
