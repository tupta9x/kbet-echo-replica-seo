
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import GameDetail from "./pages/GameDetail";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import AdminGames from "./pages/AdminGames";
import AdminCategories from "./pages/AdminCategories";
import AdminSEO from "./pages/AdminSEO";
import AdminSettings from "./pages/AdminSettings";
import AdminTools from "./pages/AdminTools";
import AdminLayout from "./components/dashboard/AdminLayout";
import Layout from "./components/Layout";
import { AdminAuthMiddleware } from "./middlewares/AdminAuthMiddleware";

const App = () => {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="game/:gameId" element={<Layout><GameDetail /></Layout>} />
            
            {/* Admin Routes - Protected with AdminAuthMiddleware */}
            <Route path="/admin" element={<AdminAuthMiddleware><AdminLayout /></AdminAuthMiddleware>}>
              <Route index element={<Admin />} />
              <Route path="games" element={<AdminGames />} />
              <Route path="categories" element={<AdminCategories />} />
              <Route path="seo" element={<AdminSEO />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="tools" element={<AdminTools />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
