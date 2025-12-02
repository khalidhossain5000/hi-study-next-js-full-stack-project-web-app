// import { NextResponse } from 'next/server';
// import { getToken } from 'next-auth/jwt';

// const SECRET = process.env.NEXTAUTH_SECRET;

// export async function middleware(request) {
//   const token = await getToken({ req: request, secret: SECRET });
//   const { pathname } = request.nextUrl;

//   console.log("TOKEN CHECK:", token, "PATH:", pathname);

// //API PROTECTION STARTS HERE 
//   // Public APIs
//   if (pathname.startsWith('/api/public')) {
//     return NextResponse.next();
//   }

//   // ROUTE API PROTECTION STARTS HERE
//   // 🔹 Public route
//   if (pathname === "/all-courses") {
//     return NextResponse.next();
//   }

 
//     // USER NOT LOGGED IN → redirect to login with callbackUrl
//   if (!token) {
//     if (pathname.startsWith('/api')) {
//       return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), {
//         status: 401,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }
//     const loginUrl = new URL('/auth/login', request.url);
//     loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
//     return NextResponse.redirect(loginUrl);

    
//   }

//   // 🔹 Admin-only route
//   if (pathname.startsWith("/dashboard/admin")) {
//     if (token.role !== "admin") {
//       return NextResponse.redirect(new URL('/unauthorized', request.url));
//     }
//   }

//   // 🔹 Everything else → logged-in user allowed
//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/dashboard/:path*',
//     '/all-courses/:id*',
//     '/cateories/:path*',
//     '/free-enrolled-course-dashboard/:path*',
//     '/payment/:path*',
//      '/api/:path*'
//   ],
// };



















// latest code

import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const SECRET = process.env.NEXTAUTH_SECRET;

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = await getToken({ req: request, secret: SECRET });

  console.log("TOKEN CHECK:", token, "PATH:", pathname);

  // PUBLIC PAGE ROUTES
  if (pathname === "/all-courses") return NextResponse.next();

  // PUBLIC API
  if (pathname.startsWith('/api/public')) return NextResponse.next();

  // NOT LOGGED IN
  if (!token) {
    if (pathname.startsWith('/api')) {
      return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Page redirect
    const loginUrl = new URL('/auth/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  //  ADMIN PAGE
  if (pathname.startsWith("/dashboard/admin")) {
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  // ADMIN API
  if (pathname.startsWith('/api/admin')) {
    if (token.role !== 'admin') {
      return new NextResponse(JSON.stringify({ message: 'Forbidden — Admin only' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  // STUDENT API (logged-in user)
  if (pathname.startsWith('/api/student')) {
    // token exists → logged-in check already done
    // no role restriction
  }

  // Everything else → allow
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/all-courses/:id*',
    '/cateories/:path*',
    '/free-enrolled-course-dashboard/:path*',
    '/payment/:path*',
    '/api/:path*', // all API routes
  ],
};
