
import { useEffect } from 'react';
import Head from 'next/head';
import GameImportTools from '@/components/dashboard/GameImportTools';
import Layout from '@/components/Layout';

const AdminTools = () => {
  useEffect(() => {
    document.title = "Game Import Tools | KBET Admin";
  }, []);

  return (
    <Layout>
      <Head>
        <title>Game Import Tools | KBET Admin</title>
        <meta name="description" content="Import games from external providers like GamePix, Game Distributed and Game Monetize" />
      </Head>
      <GameImportTools />
    </Layout>
  );
};

export default AdminTools;
