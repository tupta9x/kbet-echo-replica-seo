
import { useEffect } from 'react';
import Head from 'next/head';
import SettingsManagement from '@/components/dashboard/SettingsManagement';
import Layout from '@/components/Layout';

const AdminSettings = () => {
  useEffect(() => {
    document.title = "Settings | KBET Admin";
  }, []);

  return (
    <Layout>
      <Head>
        <title>Settings | KBET Admin</title>
        <meta name="description" content="Configure global settings for the KBET casino platform" />
      </Head>
      <SettingsManagement />
    </Layout>
  );
};

export default AdminSettings;
