
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Save } from 'lucide-react';

interface MetaTag {
  id?: number;
  title: string;
  description: string;
  keywords: string;
  pageType: string;
  pageId?: number;
}

export const SEOManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [metaTags, setMetaTags] = useState<MetaTag[]>([
    { 
      id: 1, 
      title: 'KBET - Online Casino', 
      description: 'Play the best online casino games at KBET', 
      keywords: 'casino, online casino, gambling, slots', 
      pageType: 'home',
    },
    { 
      id: 2, 
      title: 'Slots Games - KBET Casino', 
      description: 'Enjoy top-rated slot games at KBET Casino', 
      keywords: 'slots, casino slots, online slots, gambling games', 
      pageType: 'category',
      pageId: 1
    },
  ]);
  
  const [activeMetaTag, setActiveMetaTag] = useState<MetaTag>({
    title: '',
    description: '',
    keywords: '',
    pageType: 'page',
  });
  
  const { toast } = useToast();

  const handleSave = () => {
    if (activeMetaTag.id) {
      // Update existing meta tag
      setMetaTags(metaTags.map(tag => 
        tag.id === activeMetaTag.id ? activeMetaTag : tag
      ));
    } else {
      // Create new meta tag
      setMetaTags([...metaTags, { ...activeMetaTag, id: Date.now() }]);
    }
    
    toast({
      title: "SEO data saved",
      description: "The meta tag has been successfully saved",
    });
  };

  const handleSearch = () => {
    // In a real app, this would search through the database
    console.log("Searching for:", searchTerm);
  };

  const selectMetaTag = (tag: MetaTag) => {
    setActiveMetaTag({ ...tag });
  };

  const handleInputChange = (field: keyof MetaTag, value: string) => {
    setActiveMetaTag(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">SEO Management</h1>
        <Button onClick={() => setActiveMetaTag({
          title: '',
          description: '',
          keywords: '',
          pageType: 'page',
        })} className="kbet-button">
          Create New Meta Tag
        </Button>
      </div>

      <Tabs defaultValue="editor" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="editor">Meta Tag Editor</TabsTrigger>
          <TabsTrigger value="list">Meta Tags List</TabsTrigger>
        </TabsList>

        <TabsContent value="editor" className="space-y-4">
          <Card className="bg-kbet-darker border-kbet-secondary/20">
            <CardContent className="p-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Page Type</label>
                  <Select 
                    value={activeMetaTag.pageType}
                    onValueChange={(value) => handleInputChange('pageType', value)}
                  >
                    <SelectTrigger className="kbet-input">
                      <SelectValue placeholder="Select page type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Home Page</SelectItem>
                      <SelectItem value="category">Category Page</SelectItem>
                      <SelectItem value="game">Game Page</SelectItem>
                      <SelectItem value="page">Static Page</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Meta Title</label>
                  <Input
                    value={activeMetaTag.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Enter meta title"
                    className="kbet-input"
                  />
                  <p className="text-xs text-gray-500">Recommended: 50-60 characters</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Meta Description</label>
                  <Textarea
                    value={activeMetaTag.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Enter meta description"
                    className="kbet-input min-h-[100px]"
                  />
                  <p className="text-xs text-gray-500">Recommended: 150-160 characters</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Meta Keywords</label>
                  <Textarea
                    value={activeMetaTag.keywords}
                    onChange={(e) => handleInputChange('keywords', e.target.value)}
                    placeholder="Enter keywords, separated by commas"
                    className="kbet-input"
                  />
                </div>

                <Button onClick={handleSave} className="kbet-button w-full md:w-auto">
                  <Save className="mr-2 h-4 w-4" />
                  Save Meta Tag
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list">
          <Card className="bg-kbet-darker border-kbet-secondary/20 mb-4">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Input
                    placeholder="Search meta tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="kbet-input pr-10"
                  />
                  <Search 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" 
                    onClick={handleSearch}
                  />
                </div>
                <Button onClick={handleSearch} className="kbet-button sm:w-auto w-full">
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="bg-kbet-darker rounded-lg border border-kbet-secondary/20 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-kbet-secondary/10">
                  <TableHead className="text-kbet-gold">Page Type</TableHead>
                  <TableHead className="text-kbet-gold">Title</TableHead>
                  <TableHead className="text-kbet-gold hidden md:table-cell">Description</TableHead>
                  <TableHead className="text-kbet-gold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {metaTags.map((tag) => (
                  <TableRow key={tag.id} className="hover:bg-kbet-secondary/10">
                    <TableCell>{tag.pageType}</TableCell>
                    <TableCell className="font-medium">{tag.title}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      {tag.description.length > 50 
                        ? `${tag.description.substring(0, 50)}...` 
                        : tag.description}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => selectMetaTag(tag)}
                        className="border-kbet-gold text-kbet-gold hover:bg-kbet-gold/10"
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEOManagement;
