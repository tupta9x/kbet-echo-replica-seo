
import { useEffect } from 'react';
import SettingsManagement from '@/components/dashboard/SettingsManagement';

const AdminSettings = () => {
  useEffect(() => {
    // SEO - Set document title for admin settings page
    document.title = "Settings | KBET Admin";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Configure global settings for the KBET casino platform');
    }
  }, []);

  return (
    <SettingsManagement />
  );
};

export default AdminSettings;
