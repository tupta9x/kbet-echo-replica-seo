
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Save, Globe, Shield, Mail, CreditCard } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const generalSettingsSchema = z.object({
  siteName: z.string().min(2, { message: "Site name must be at least 2 characters" }),
  siteDescription: z.string(),
  maintenance: z.boolean(),
  logo: z.string().url({ message: "Must be a valid URL" }).optional(),
  favicon: z.string().url({ message: "Must be a valid URL" }).optional(),
});

export const SettingsManagement = () => {
  const [activeTab, setActiveTab] = useState("general");
  const { toast } = useToast();

  const generalForm = useForm<z.infer<typeof generalSettingsSchema>>({
    resolver: zodResolver(generalSettingsSchema),
    defaultValues: {
      siteName: "KBET Casino",
      siteDescription: "The ultimate online casino experience",
      maintenance: false,
      logo: "https://example.com/logo.png",
      favicon: "https://example.com/favicon.ico",
    },
  });

  const onSubmitGeneral = (values: z.infer<typeof generalSettingsSchema>) => {
    console.log("General settings saved:", values);
    
    toast({
      title: "Settings saved",
      description: "Your general settings have been successfully saved",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Site Settings</h1>
      </div>

      <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="general">
            <Globe className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">General</span>
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="email">
            <Mail className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Email</span>
          </TabsTrigger>
          <TabsTrigger value="payment">
            <CreditCard className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Payment</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card className="bg-kbet-darker border-kbet-secondary/20">
            <CardHeader>
              <CardTitle className="text-white">General Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...generalForm}>
                <form onSubmit={generalForm.handleSubmit(onSubmitGeneral)} className="space-y-6">
                  <FormField
                    control={generalForm.control}
                    name="siteName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Site Name</FormLabel>
                        <FormControl>
                          <Input {...field} className="kbet-input" />
                        </FormControl>
                        <FormDescription className="text-gray-500">
                          The name of your casino site
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={generalForm.control}
                    name="siteDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Site Description</FormLabel>
                        <FormControl>
                          <Textarea {...field} className="kbet-input min-h-[100px]" />
                        </FormControl>
                        <FormDescription className="text-gray-500">
                          A brief description of your casino site
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={generalForm.control}
                    name="logo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Logo URL</FormLabel>
                        <FormControl>
                          <Input {...field} className="kbet-input" />
                        </FormControl>
                        <FormDescription className="text-gray-500">
                          URL to your site logo
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={generalForm.control}
                    name="favicon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Favicon URL</FormLabel>
                        <FormControl>
                          <Input {...field} className="kbet-input" />
                        </FormControl>
                        <FormDescription className="text-gray-500">
                          URL to your site favicon
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={generalForm.control}
                    name="maintenance"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border border-kbet-secondary/20 p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-gray-300">Maintenance Mode</FormLabel>
                          <FormDescription className="text-gray-500">
                            Enable maintenance mode to prevent users from accessing the site
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="kbet-button">
                    <Save className="mr-2 h-4 w-4" />
                    Save Settings
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card className="bg-kbet-darker border-kbet-secondary/20">
            <CardHeader>
              <CardTitle className="text-white">Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-row items-center justify-between rounded-lg border border-kbet-secondary/20 p-4">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Two Factor Authentication</Label>
                  <p className="text-sm text-gray-500">
                    Enable 2FA for administrator accounts
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="flex flex-row items-center justify-between rounded-lg border border-kbet-secondary/20 p-4">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">CAPTCHA Protection</Label>
                  <p className="text-sm text-gray-500">
                    Enable CAPTCHA on login and registration forms
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2">
                <Label className="text-gray-300">Session Timeout (minutes)</Label>
                <Input type="number" defaultValue="30" className="kbet-input" />
                <p className="text-sm text-gray-500">
                  How long before inactive admin sessions expire
                </p>
              </div>
              
              <Button className="kbet-button mt-4">
                <Save className="mr-2 h-4 w-4" />
                Save Security Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="email">
          <Card className="bg-kbet-darker border-kbet-secondary/20">
            <CardHeader>
              <CardTitle className="text-white">Email Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-gray-300">SMTP Host</Label>
                  <Input defaultValue="smtp.example.com" className="kbet-input" />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-gray-300">SMTP Port</Label>
                  <Input type="number" defaultValue="587" className="kbet-input" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-gray-300">SMTP Username</Label>
                  <Input defaultValue="user@example.com" className="kbet-input" />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-gray-300">SMTP Password</Label>
                  <Input type="password" defaultValue="password" className="kbet-input" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="text-gray-300">From Email</Label>
                <Input defaultValue="noreply@kbet.com" className="kbet-input" />
              </div>
              
              <div className="flex flex-row items-center justify-between rounded-lg border border-kbet-secondary/20 p-4">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Use SSL/TLS</Label>
                  <p className="text-sm text-gray-500">
                    Enable secure connection for email
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Button className="kbet-button mt-4">
                <Save className="mr-2 h-4 w-4" />
                Save Email Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment">
          <Card className="bg-kbet-darker border-kbet-secondary/20">
            <CardHeader>
              <CardTitle className="text-white">Payment Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-row items-center justify-between rounded-lg border border-kbet-secondary/20 p-4">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">Stripe Payments</Label>
                  <p className="text-sm text-gray-500">
                    Enable Stripe payment gateway
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="space-y-2">
                <Label className="text-gray-300">Stripe API Key</Label>
                <Input type="password" defaultValue="sk_test_..." className="kbet-input" />
              </div>
              
              <div className="space-y-2">
                <Label className="text-gray-300">Stripe Publishable Key</Label>
                <Input defaultValue="pk_test_..." className="kbet-input" />
              </div>
              
              <div className="flex flex-row items-center justify-between rounded-lg border border-kbet-secondary/20 p-4">
                <div className="space-y-0.5">
                  <Label className="text-gray-300">PayPal Payments</Label>
                  <p className="text-sm text-gray-500">
                    Enable PayPal payment gateway
                  </p>
                </div>
                <Switch />
              </div>
              
              <Button className="kbet-button mt-4">
                <Save className="mr-2 h-4 w-4" />
                Save Payment Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsManagement;
