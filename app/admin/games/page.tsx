
import GameManagement from "@/components/dashboard/GameManagement";

export const metadata = {
  title: "Games Management | KBET Admin",
  description: "Manage casino games - add, edit, and remove games from the KBET platform"
};

export default function AdminGamesPage() {
  return <GameManagement />;
}
