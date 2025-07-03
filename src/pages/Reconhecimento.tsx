import { useState } from "react";
import { Camera, Upload, Brain, Fish, Leaf, Info, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Reconhecimento = () => {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setAnalysis(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    if (!selectedImage) {
      toast({
        title: "Erro",
        description: "Por favor, selecione uma imagem primeiro.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulação de análise da IA
    setTimeout(() => {
      setAnalysis({
        species: "Neon Tetra",
        scientificName: "Paracheirodon innesi",
        confidence: 94,
        type: "Peixe Tropical",
        characteristics: [
          "Corpo pequeno e alongado (3-4 cm)",
          "Faixa azul iridescente no corpo",
          "Coloração vermelha na parte inferior",
          "Nadadeiras transparentes"
        ],
        requirements: {
          temperature: "22-26°C",
          ph: "5.5-7.0",
          tankSize: "Mínimo 40 litros",
          behavior: "Pacífico, em cardume"
        },
        compatibility: [
          "Corydoras",
          "Guppies",
          "Mollies",
          "Plantas aquáticas"
        ],
        care: [
          "Manter em grupos de 6+ indivíduos",
          "Alimentar 2-3 vezes ao dia com moderação",
          "Preferem águas ligeiramente ácidas",
          "Sensíveis à qualidade da água"
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-wave py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Camera className="h-12 w-12 text-primary animate-float" />
              <Brain className="h-6 w-6 text-secondary absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Reconhecimento de Espécies</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Envie uma foto de um peixe ou planta e nossa IA identificará a espécie e suas características
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload de Imagem */}
          <Card className="shadow-aqua">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5 text-primary" />
                <span>Enviar Imagem</span>
              </CardTitle>
              <CardDescription>
                Faça upload de uma foto clara do peixe ou planta que deseja identificar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Área de Upload */}
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors duration-300">
                {selectedImage ? (
                  <div className="space-y-4">
                    <img 
                      src={selectedImage} 
                      alt="Imagem selecionada" 
                      className="max-w-full max-h-64 mx-auto rounded-lg shadow-soft"
                    />
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedImage(null);
                        setAnalysis(null);
                      }}
                    >
                      Trocar Imagem
                    </Button>
                  </div>
                ) : (
                  <label htmlFor="imageUpload" className="cursor-pointer">
                    <div className="space-y-4">
                      <Camera className="h-16 w-16 text-muted-foreground mx-auto" />
                      <div>
                        <p className="text-lg font-medium text-foreground mb-2">
                          Clique para enviar uma imagem
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Suporta JPG, PNG até 5MB
                        </p>
                      </div>
                    </div>
                  </label>
                )}
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              {/* Botão de Análise */}
              <Button
                onClick={analyzeImage}
                disabled={!selectedImage || isAnalyzing}
                className="w-full bg-gradient-ocean text-white hover:shadow-aqua transition-all duration-300"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Brain className="h-5 w-5 mr-2 animate-pulse" />
                    Analisando com IA...
                  </>
                ) : (
                  <>
                    <Brain className="h-5 w-5 mr-2" />
                    Identificar Espécie
                  </>
                )}
              </Button>

              {/* Dicas */}
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2 flex items-center">
                  <Info className="h-4 w-4 mr-2 text-primary" />
                  Dicas para melhores resultados:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use boa iluminação</li>
                  <li>• Capture o animal/planta por completo</li>
                  <li>• Evite fotos borradas</li>
                  <li>• Aproxime-se do objeto</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Resultado da Análise */}
          <div className="space-y-6">
            {analysis ? (
              <>
                {/* Identificação */}
                <Card className="shadow-soft border-success/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-success">
                      <Fish className="h-5 w-5" />
                      <span>Espécie Identificada</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{analysis.species}</h3>
                        <p className="text-muted-foreground italic">{analysis.scientificName}</p>
                        <div className="flex items-center mt-2">
                          <span className="text-sm text-muted-foreground">Confiança: </span>
                          <div className="flex items-center ml-2">
                            <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-success rounded-full transition-all duration-500"
                                style={{ width: `${analysis.confidence}%` }}
                              />
                            </div>
                            <span className="ml-2 text-sm font-medium text-success">{analysis.confidence}%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {analysis.type}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Características */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Características</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysis.characteristics.map((char: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm text-foreground">{char}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Exigências */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Exigências do Aquário</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-foreground">Temperatura</p>
                        <p className="text-sm text-muted-foreground">{analysis.requirements.temperature}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">pH</p>
                        <p className="text-sm text-muted-foreground">{analysis.requirements.ph}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Tamanho do Aquário</p>
                        <p className="text-sm text-muted-foreground">{analysis.requirements.tankSize}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Comportamento</p>
                        <p className="text-sm text-muted-foreground">{analysis.requirements.behavior}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Compatibilidade */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Compatível com:</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {analysis.compatibility.map((item: string, index: number) => (
                        <span key={index} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Cuidados */}
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Leaf className="h-5 w-5 text-success" />
                      <span>Cuidados Especiais</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysis.care.map((tip: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-success mt-1">✓</span>
                          <span className="text-sm text-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="shadow-soft border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    Envie uma imagem para ver a análise detalhada da espécie
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reconhecimento;