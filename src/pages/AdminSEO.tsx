
import { useEffect } from 'react';
import Head from 'next/head';
import SEOManagement from '@/components/dashboard/SEOManagement';
import Layout from '@/components/Layout';

const AdminSEO = () => {
  useEffect(() => {
    // SEO - Set document title for admin SEO page
    document.title = "SEO Management | KBET Admin";
  }, []);

  return (
    <Layout>
      <Head>
        <title>SEO Management | KBET Admin</title>
        <meta name="description" content="Manage SEO settings for KBET casino platform - optimize meta tags and page descriptions" />
      </Head>
      <SEOManagement />
    </Layout>
  );
};

export default AdminSEO;
