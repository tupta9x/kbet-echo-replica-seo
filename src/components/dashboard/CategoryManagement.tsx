
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Edit, Trash2, Check } from 'lucide-react';
import { Category } from '@/types/types';
import { categories } from '@/data/mockData';

export const CategoryManagement = () => {
  const [categoriesList, setCategoriesList] = useState<Category[]>(categories);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'add' | 'edit'>('add');
  
  const { toast } = useToast();

  const handleAddCategory = () => {
    setDialogMode('add');
    setSelectedCategory({
      id: '',
      name: '',
      slug: '',
      description: '',
      featured: false
    });
    setIsDialogOpen(true);
  };

  const handleEditCategory = (category: Category) => {
    setDialogMode('edit');
    setSelectedCategory({ ...category });
    setIsDialogOpen(true);
  };

  const handleDeleteCategory = (categoryId: string) => {
    const updatedCategories = categoriesList.filter(category => category.id !== categoryId);
    setCategoriesList(updatedCategories);
    
    toast({
      title: "Category deleted",
      description: "The category has been successfully deleted",
    });
  };

  const handleSaveCategory = () => {
    if (!selectedCategory || !selectedCategory.name) return;
    
    // Generate slug from name if empty
    if (!selectedCategory.slug) {
      selectedCategory.slug = selectedCategory.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }
    
    if (dialogMode === 'add') {
      // In a real app, we'd generate a unique ID
      const newCategory = { 
        ...selectedCategory, 
        id: `cat${categoriesList.length + 1}` 
      };
      
      setCategoriesList([...categoriesList, newCategory]);
      
      toast({
        title: "Category added",
        description: "The new category has been successfully added",
      });
    } else {
      const updatedCategories = categoriesList.map(category => 
        category.id === selectedCategory.id ? selectedCategory : category
      );
      
      setCategoriesList(updatedCategories);
      
      toast({
        title: "Category updated",
        description: "The category has been successfully updated",
      });
    }
    
    setIsDialogOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Categories Management</h1>
        <Button onClick={handleAddCategory} className="kbet-button">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add New Category
        </Button>
      </div>

      <div className="bg-kbet-darker rounded-lg border border-kbet-secondary/20 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-kbet-secondary/10">
              <TableHead className="text-kbet-gold">Category Name</TableHead>
              <TableHead className="text-kbet-gold hidden md:table-cell">Slug</TableHead>
              <TableHead className="text-kbet-gold hidden lg:table-cell">Description</TableHead>
              <TableHead className="text-kbet-gold">Featured</TableHead>
              <TableHead className="text-kbet-gold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categoriesList.length > 0 ? (
              categoriesList.map((category) => (
                <TableRow key={category.id} className="hover:bg-kbet-secondary/10">
                  <TableCell className="font-medium">{category.name}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="outline" className="border-kbet-secondary text-gray-300">
                      {category.slug}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden lg:table-cell text-gray-300">
                    {category.description || '-'}
                  </TableCell>
                  <TableCell>
                    {category.featured ? (
                      <Check className="h-5 w-5 text-kbet-gold" />
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleEditCategory(category)}
                        className="border-kbet-gold text-kbet-gold hover:bg-kbet-gold/10"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteCategory(category.id)}
                        className="border-red-500 text-red-500 hover:bg-red-500/10"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  No categories found. Add your first category.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Add/Edit Category Dialog */}
      {selectedCategory && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-kbet-darker border-kbet-secondary/20 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl text-white">
                {dialogMode === 'add' ? 'Add New Category' : 'Edit Category'}
              </DialogTitle>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Category Name</label>
                <Input
                  placeholder="Enter category name"
                  value={selectedCategory.name}
                  onChange={(e) => setSelectedCategory({...selectedCategory, name: e.target.value})}
                  className="kbet-input"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Slug (URL friendly name)</label>
                <Input
                  placeholder="Enter slug (e.g. video-slots)"
                  value={selectedCategory.slug}
                  onChange={(e) => setSelectedCategory({...selectedCategory, slug: e.target.value})}
                  className="kbet-input"
                />
                <p className="text-xs text-gray-400">Leave empty to auto-generate from name</p>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Description</label>
                <Input
                  placeholder="Category description"
                  value={selectedCategory.description || ''}
                  onChange={(e) => setSelectedCategory({...selectedCategory, description: e.target.value})}
                  className="kbet-input"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="featured" 
                  checked={selectedCategory.featured || false}
                  onCheckedChange={(checked) => 
                    setSelectedCategory({...selectedCategory, featured: !!checked})
                  }
                  className="border-kbet-gold text-kbet-gold"
                />
                <label htmlFor="featured" className="text-sm font-medium text-gray-300 cursor-pointer">
                  Feature this category
                </label>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="border-kbet-secondary text-white">
                Cancel
              </Button>
              <Button onClick={handleSaveCategory} className="kbet-button">
                Save Category
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CategoryManagement;
