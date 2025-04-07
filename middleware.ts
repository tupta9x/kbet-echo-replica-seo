
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;
  
  // Check if the path is for admin routes
  if (path.startsWith('/admin')) {
    // Check if the user is authenticated as an admin
    const isAdmin = request.cookies.get('userRole')?.value === 'admin';
    
    if (!isAdmin) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  return NextResponse.next();
}

// Configure which paths this middleware will run on
export const config = {
  matcher: ['/admin/:path*'],
};
