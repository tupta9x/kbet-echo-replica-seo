
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { games, categories } from "@/data/mockData";
import { Activity, Users, Award, Gamepad2 } from "lucide-react";

export const DashboardHome = () => {
  // Prepare data for charts
  const categoryData = categories.map(category => {
    const gamesCount = games.filter(game => 
      game.categoryIds.includes(category.id)
    ).length;
    
    return {
      name: category.name,
      value: gamesCount
    };
  }).filter(item => item.value > 0);
  
  const popularityData = [
    { name: "Featured", count: games.filter(g => g.featured).length },
    { name: "New", count: games.filter(g => g.new).length },
    { name: "Popular", count: games.filter(g => g.popular).length },
    { name: "Regular", count: games.filter(g => !g.featured && !g.new && !g.popular).length }
  ];
  
  const COLORS = ['#ffc107', '#ff6b6b', '#51cf66', '#339af0', '#cc5de8', '#20c997'];

  // Mock stats for the dashboard
  const stats = [
    { title: "Total Games", value: games.length, icon: <Gamepad2 className="h-6 w-6 text-kbet-gold" /> },
    { title: "Categories", value: categories.length, icon: <Award className="h-6 w-6 text-kbet-gold" /> },
    { title: "Users", value: 12345, icon: <Users className="h-6 w-6 text-kbet-gold" /> },
    { title: "Active Players", value: 1250, icon: <Activity className="h-6 w-6 text-kbet-gold" /> }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-kbet-darker border-kbet-secondary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value.toLocaleString()}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="bg-kbet-darker border-kbet-secondary/20">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg font-medium text-white">Games by Category</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={categoryData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" tick={{ fill: '#ccc' }} />
                  <YAxis tick={{ fill: '#ccc' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1a2e', 
                      border: '1px solid #3a506b',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="value" name="Games" fill="#ffc107" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-kbet-darker border-kbet-secondary/20">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg font-medium text-white">Game Status Distribution</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={popularityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                    nameKey="name"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {popularityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1a1a2e', 
                      border: '1px solid #3a506b',
                      color: '#fff'
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-kbet-darker border-kbet-secondary/20">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-white">Recently Added Games</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {games.filter(g => g.new).slice(0, 4).map((game) => (
              <div 
                key={game.id} 
                className="bg-kbet-dark border border-kbet-secondary/20 rounded-lg overflow-hidden"
              >
                <div className="h-32 bg-kbet-secondary/20 flex items-center justify-center">
                  <img 
                    src={game.imageUrl} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">{game.title}</h3>
                    <Badge className="bg-kbet-accent text-white">NEW</Badge>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-2">{game.description}</p>
                  <Button variant="outline" size="sm" className="w-full border-kbet-gold text-kbet-gold hover:bg-kbet-gold/10">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
