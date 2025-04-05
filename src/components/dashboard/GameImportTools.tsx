
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress"; 
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, AlertCircle, RefreshCw } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ProviderConfig {
  name: string;
  apiKey: string;
  apiUrl: string;
  enabled: boolean;
}

export const GameImportTools = () => {
  const [isImporting, setIsImporting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [importResult, setImportResult] = useState<string | null>(null);
  const [importLogs, setImportLogs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const [providerConfigs, setProviderConfigs] = useState<ProviderConfig[]>([
    {
      name: 'gamepix',
      apiKey: 'YOUR_GAMEPIX_API_KEY',
      apiUrl: 'https://api.gamepix.com/v1',
      enabled: true,
    },
    {
      name: 'distributed',
      apiKey: 'YOUR_DISTRIBUTED_API_KEY',
      apiUrl: 'https://api.distributed-games.com/v2',
      enabled: true,
    },
    {
      name: 'monetize',
      apiKey: 'YOUR_MONETIZE_API_KEY',
      apiUrl: 'https://api.monetize-games.com/v1',
      enabled: false,
    }
  ]);
  
  const [selectedProvider, setSelectedProvider] = useState<string>(providerConfigs[0].name);
  const [importSettings, setImportSettings] = useState({
    gameLimit: 100,
    overwrite: true,
    categories: true,
    thumbnails: true,
    descriptions: true,
  });

  const updateProviderConfig = (name: string, field: keyof ProviderConfig, value: string | boolean) => {
    setProviderConfigs(configs => 
      configs.map(config => 
        config.name === name ? { ...config, [field]: value } : config
      )
    );
  };

  const startImport = () => {
    setIsImporting(true);
    setProgress(0);
    setImportResult(null);
    setError(null);
    setImportLogs([]);
    
    // Simulate the import process
    const totalSteps = 5;
    let currentStep = 0;
    
    const selectedConfig = providerConfigs.find(p => p.name === selectedProvider);
    
    if (!selectedConfig) {
      setError("Selected provider configuration not found");
      setIsImporting(false);
      return;
    }
    
    if (!selectedConfig.apiKey || selectedConfig.apiKey === 'YOUR_GAMEPIX_API_KEY') {
      setError("Please set a valid API key for the selected provider");
      setIsImporting(false);
      return;
    }
    
    // Simulate API calls with timeouts
    const importSteps = [
      {
        name: "Connecting to API",
        action: () => {
          addLog(`Connecting to ${selectedConfig.apiUrl}...`);
          return new Promise<void>(resolve => setTimeout(resolve, 1000));
        }
      },
      {
        name: "Fetching available games",
        action: () => {
          addLog(`Fetching games list from ${selectedProvider}...`);
          return new Promise<void>(resolve => setTimeout(resolve, 1500));
        }
      },
      {
        name: "Processing game data",
        action: () => {
          const count = Math.floor(Math.random() * importSettings.gameLimit) + 1;
          addLog(`Found ${count} games available for import`);
          return new Promise<void>(resolve => setTimeout(resolve, 2000));
        }
      },
      {
        name: "Importing games",
        action: () => {
          const count = Math.floor(Math.random() * importSettings.gameLimit) + 1;
          for (let i = 1; i <= 10; i++) {
            addLog(`Imported game ${i}: "Sample Game ${i}"`);
          }
          addLog(`... and more`);
          return new Promise<void>(resolve => setTimeout(resolve, 2500));
        }
      },
      {
        name: "Finalizing import",
        action: () => {
          const count = Math.floor(Math.random() * 100) + 10;
          addLog(`Successfully imported ${count} games`);
          setImportResult(`Successfully imported ${count} games from ${selectedProvider}`);
          return new Promise<void>(resolve => setTimeout(resolve, 1000));
        }
      },
    ];
    
    function processStep() {
      if (currentStep < importSteps.length) {
        const step = importSteps[currentStep];
        setProgress(Math.round(((currentStep + 0.5) / totalSteps) * 100));
        
        step.action()
          .then(() => {
            currentStep++;
            setProgress(Math.round((currentStep / totalSteps) * 100));
            processStep();
          })
          .catch(err => {
            console.error(err);
            setError(`Error during import: ${err.message}`);
            setIsImporting(false);
          });
      } else {
        toast({
          title: "Import completed",
          description: `Successfully imported games from ${selectedProvider}`,
        });
        setIsImporting(false);
      }
    }
    
    processStep();
  };

  const addLog = (message: string) => {
    setImportLogs(prev => [...prev, message]);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Game Import Tools</h1>
      </div>

      <Tabs defaultValue="import">
        <TabsList className="mb-4">
          <TabsTrigger value="import">Import Games</TabsTrigger>
          <TabsTrigger value="providers">Provider Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="import">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="bg-kbet-darker border-kbet-secondary/20">
                <CardHeader>
                  <CardTitle className="text-white">Import Games</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">Select Provider</Label>
                    <Select
                      value={selectedProvider}
                      onValueChange={setSelectedProvider}
                    >
                      <SelectTrigger className="kbet-input">
                        <SelectValue placeholder="Select provider" />
                      </SelectTrigger>
                      <SelectContent>
                        {providerConfigs.map(provider => (
                          <SelectItem 
                            key={provider.name} 
                            value={provider.name}
                            disabled={!provider.enabled}
                          >
                            {provider.name.charAt(0).toUpperCase() + provider.name.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-300">Game Limit</Label>
                    <Input
                      type="number"
                      value={importSettings.gameLimit}
                      onChange={(e) => setImportSettings({
                        ...importSettings,
                        gameLimit: parseInt(e.target.value) || 0
                      })}
                      min={1}
                      max={1000}
                      className="kbet-input"
                    />
                    <p className="text-xs text-gray-500">Maximum number of games to import (1-1000)</p>
                  </div>
                  
                  <div className="space-y-3">
                    <Label className="text-gray-300">Import Settings</Label>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="overwrite" 
                        checked={importSettings.overwrite}
                        onCheckedChange={(checked) => setImportSettings({
                          ...importSettings,
                          overwrite: !!checked
                        })}
                      />
                      <label
                        htmlFor="overwrite"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                      >
                        Overwrite existing games
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="categories" 
                        checked={importSettings.categories}
                        onCheckedChange={(checked) => setImportSettings({
                          ...importSettings,
                          categories: !!checked
                        })}
                      />
                      <label
                        htmlFor="categories"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                      >
                        Import categories
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="thumbnails" 
                        checked={importSettings.thumbnails}
                        onCheckedChange={(checked) => setImportSettings({
                          ...importSettings,
                          thumbnails: !!checked
                        })}
                      />
                      <label
                        htmlFor="thumbnails"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                      >
                        Download thumbnails
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="descriptions" 
                        checked={importSettings.descriptions}
                        onCheckedChange={(checked) => setImportSettings({
                          ...importSettings,
                          descriptions: !!checked
                        })}
                      />
                      <label
                        htmlFor="descriptions"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                      >
                        Import descriptions
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={startImport} 
                    disabled={isImporting}
                    className="kbet-button w-full mt-4"
                  >
                    {isImporting ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Importing...
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-4 w-4" />
                        Start Import
                      </>
                    )}
                  </Button>
                  
                  {isImporting && (
                    <div className="space-y-2 mt-4">
                      <Label className="text-gray-300">Progress: {progress}%</Label>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )}
                  
                  {error && (
                    <Alert variant="destructive" className="mt-4">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  
                  {importResult && (
                    <Alert className="mt-4 bg-green-900/20 border-green-500">
                      <AlertTitle>Import Complete</AlertTitle>
                      <AlertDescription>{importResult}</AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-kbet-darker border-kbet-secondary/20">
                <CardHeader>
                  <CardTitle className="text-white">Import Logs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/50 rounded-md p-3 h-[400px] overflow-y-auto font-mono text-sm text-gray-300">
                    {importLogs.length === 0 ? (
                      <p className="text-gray-500 italic">No logs available. Start an import to see logs.</p>
                    ) : (
                      importLogs.map((log, index) => (
                        <div key={index} className="border-b border-gray-800 py-1 last:border-0">
                          {log}
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="providers">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {providerConfigs.map(provider => (
              <Card key={provider.name} className="bg-kbet-darker border-kbet-secondary/20">
                <CardHeader>
                  <CardTitle className="text-white capitalize">
                    {provider.name} API
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300">API Key</Label>
                    <Input
                      type="password"
                      value={provider.apiKey}
                      onChange={(e) => updateProviderConfig(provider.name, 'apiKey', e.target.value)}
                      className="kbet-input"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-gray-300">API URL</Label>
                    <Input
                      value={provider.apiUrl}
                      onChange={(e) => updateProviderConfig(provider.name, 'apiUrl', e.target.value)}
                      className="kbet-input"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={`${provider.name}-enabled`} 
                      checked={provider.enabled}
                      onCheckedChange={(checked) => updateProviderConfig(
                        provider.name, 
                        'enabled', 
                        !!checked
                      )}
                    />
                    <label
                      htmlFor={`${provider.name}-enabled`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                    >
                      Enable provider
                    </label>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-kbet-gold text-kbet-gold hover:bg-kbet-gold/10"
                  >
                    Test Connection
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GameImportTools;
