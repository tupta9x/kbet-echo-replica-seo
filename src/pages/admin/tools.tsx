
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import GameImportTools from '@/components/dashboard/GameImportTools';

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

const AdminTools = () => {
  return (
    <>
      <Head>
        <title>Game Import Tools | KBET Admin</title>
        <meta name="description" content="Import games from external providers like GamePix, Game Distributed and Game Monetize" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <GameImportTools />
    </>
  );
};

export default AdminTools;
