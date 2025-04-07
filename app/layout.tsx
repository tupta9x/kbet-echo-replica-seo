
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Providers } from "./providers";
import "@/index.css";

export const metadata = {
  title: "KBET - Premium Online Casino & Sports Betting",
  description: "Play your favorite casino games, sports betting, live dealers and more at KBET. Safe, secure, and licensed online gambling platform."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0f0f1b] text-white">
        <Providers>
          <TooltipProvider>
            <main>{children}</main>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
