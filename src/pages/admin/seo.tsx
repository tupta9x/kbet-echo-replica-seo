
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import SEOManagement from '@/components/dashboard/SEOManagement';
import AdminLayout from '@/components/dashboard/AdminLayout';
import { prisma } from '@/lib/prisma';

// Server-side authentication check
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Check if the user is authenticated as an admin
  // This is a simplified version - in production, use proper auth checks
  const isAdmin = context.req.cookies.userRole === 'admin';
  
  if (!isAdmin) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  
  return {
    props: {}, // Will be passed to the page component as props
  };
};

const AdminSEO = () => {
  return (
    <AdminLayout>
      <Head>
        <title>SEO Management | KBET Admin</title>
        <meta name="description" content="Manage SEO settings for KBET casino platform - optimize meta tags and page descriptions" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <SEOManagement />
    </AdminLayout>
  );
};

export default AdminSEO;
