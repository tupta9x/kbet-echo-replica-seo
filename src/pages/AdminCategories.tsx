
import { useEffect } from 'react';
import CategoryManagement from '@/components/dashboard/CategoryManagement';

const AdminCategories = () => {
  useEffect(() => {
    // SEO - Set document title for admin categories page
    document.title = "Categories Management | KBET Admin";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Manage game categories - create and organize categories for KBET casino platform');
    }
  }, []);

  return (
    <CategoryManagement />
  );
};

export default AdminCategories;
