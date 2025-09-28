'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

type BreadcrumbItem = {
  title: string;
  link: string;
};

// Route mapping based on actual app routes
const routeMapping: Record<string, BreadcrumbItem[]> = {
  // Dashboard
  '/dashboard': [{ title: 'Dashboard', link: '/dashboard' }],
  
  // E-commerce - Products
  '/product/list': [
    { title: 'E-commerce', link: '#' },
    { title: 'Products', link: '/product/list' }
  ],
  '/product/create': [
    { title: 'E-commerce', link: '#' },
    { title: 'Products', link: '/product/list' },
    { title: 'Create Product', link: '/product/create' }
  ],
  '/product/inventory': [
    { title: 'E-commerce', link: '#' },
    { title: 'Products Inventory', link: '/product/inventory' }
  ],
  '/product/low-stock': [
    { title: 'E-commerce', link: '#' },
    { title: 'Products Low Stock', link: '/product/low-stock' }
  ],
  
  // E-commerce - Categories
  '/category-list': [
    { title: 'E-commerce', link: '#' },
    { title: 'Categories', link: '/category-list' }
  ],
  '/category-list/create': [
    { title: 'E-commerce', link: '#' },
    { title: 'Categories', link: '/category-list' },
    { title: 'Create Category', link: '/category-list/create' }
  ],
  
  // Services - Appointments
  '/appointment-list': [
    { title: 'Services', link: '#' },
    { title: 'Appointments', link: '/appointment-list' }
  ],

  // Services - Blogs
  '/blog-list': [
    { title: 'Services', link: '#' },
    { title: 'Blogs', link: '/blog-list' }
  ],
  '/blog-list/create': [
    { title: 'Services', link: '#' },
    { title: 'Blogs', link: '/blog-list' },
    { title: 'Create Blog', link: '/blog-list/create' }
  ],
  
  // Accounts
  '/user-accounts': [
    { title: 'Accounts', link: '#' },
    { title: 'User Accounts', link: '/user-accounts' }
  ],
  
  // Auth pages
  '/sign-in': [{ title: 'Sign In', link: '/sign-in' }],
  '/forgot-password': [{ title: 'Forgot Password', link: '/forgot-password' }],
  '/reset-password': [{ title: 'Reset Password', link: '/reset-password' }],

  // E-commerce - Orders
  '/order-list': [
    { title: 'E-commerce', link: '#' },
    { title: 'Orders', link: '/order-list' }
  ],
};

// Helper function to generate breadcrumbs for dynamic routes
const generateDynamicBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];
  
  // Handle dynamic routes with IDs or update
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const path = `/${segments.slice(0, i + 1).join('/')}`;
    
    // Check if this is a dynamic segment (UUID, number, or 'update')
    if (segment === 'update') {
      breadcrumbs.push({
        title: 'Update',
        link: path
      });
    } else if (segment.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
      // UUID pattern - show as "Details"
      breadcrumbs.push({
        title: 'Details',
        link: path
      });
    } else if (segment.match(/^\d+$/)) {
      // Numeric ID - show as "Details"
      breadcrumbs.push({
        title: 'Details',
        link: path
      });
    } else {
      // Regular segment
      breadcrumbs.push({
        title: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        link: path
      });
    }
  }
  
  return breadcrumbs;
};

export function useBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    // Handle dynamic routes (with IDs or update)
    if (pathname.includes('/update') || pathname.match(/\/[0-9a-f-]{36}$/i) || pathname.match(/\/\d+$/)) {
      return generateDynamicBreadcrumbs(pathname);
    }

    // If no exact match, fall back to generating breadcrumbs from the path
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        link: path
      };
    });
  }, [pathname]);

  return breadcrumbs;
}
