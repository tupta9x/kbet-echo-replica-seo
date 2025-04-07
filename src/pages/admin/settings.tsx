
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import SettingsManagement from '@/components/dashboard/SettingsManagement';

// Server-side authentication check
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Check if the user is authenticated as an admin
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
    props: {}, 
  };
};

const AdminSettings = () => {
  return (
    <>
      <Head>
        <title>Settings | KBET Admin</title>
        <meta name="description" content="Configure global settings for the KBET casino platform" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <SettingsManagement />
    </>
  );
};

export default AdminSettings;
