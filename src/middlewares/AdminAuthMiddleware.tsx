
import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

interface AdminAuthMiddlewareProps {
  children: ReactNode;
}

export const AdminAuthMiddleware = ({ children }: AdminAuthMiddlewareProps) => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        // In a real implementation, this would check session/authentication
        // from your database through an API call
        const userRole = localStorage.getItem('userRole');
        
        if (userRole === 'admin') {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          toast({
            title: "Access Denied",
            description: "You need admin privileges to access this area",
            variant: "destructive",
          });
          navigate('/');
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
        setIsAdmin(false);
        navigate('/');
      }
    };

    checkAdminStatus();
  }, [navigate, toast]);

  // Return loading state or the actual admin component
  return isAdmin ? <>{children}</> : null;
};
