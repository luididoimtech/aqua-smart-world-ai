import { useState } from "react";
import { Fish, Plus, Thermometer, Droplets, TestTube, Ruler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const MeuAquario = () => {
  const { toast } = useToast();
  const [aquarium, setAquarium] = useState({
    nome: "",
    volume: "",
    temperatura: "",
    ph: "",
    especies: "",
    plantas: "",
    observacoes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Aquário cadastrado!",
      description: "Suas recomendações personalizadas estão sendo geradas pela IA.",
    });
  };

  const recommendations = [
    {
      type: "fish",
      name: "Neon Tetra",
      compatibility: 95,
      reason: "Perfeito para aquários comunitários com pH neutro",
      image: "🐠"
    },
    {
      type: "fish", 
      name: "Corydoras Paleatus",
      compatibility: 90,
      reason: "Excelente para limpeza do fundo, pacífico",
      image: "🐟"
    },
    {
      type: "plant",
      name: "Anubias Nana",
      compatibility: 98,
      reason: "Resistente, cresce bem em baixa luz",
      image: "🌱"
    },
    {
      type: "plant",
      name: "Vallisneria",
      compatibility: 85,
      reason: "Oxigena bem a água, fácil manutenção",
      image: "🌿"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-wave py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Fish className="h-12 w-12 text-primary animate-float" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Meu Aquário</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cadastre as informações do seu aquário e receba recomendações personalizadas da nossa IA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulário de Cadastro */}
          <Card className="shadow-aqua">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5 text-primary" />
                <span>Cadastrar Aquário</span>
              </CardTitle>
              <CardDescription>
                Preencha as informações do seu aquário para receber recomendações precisas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nome">Nome do Aquário</Label>
                  <Input
                    id="nome"
                    value={aquarium.nome}
                    onChange={(e) => setAquarium({...aquarium, nome: e.target.value})}
                    placeholder="Ex: Aquário da Sala"
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="volume" className="flex items-center space-x-1">
                      <Ruler className="h-4 w-4" />
                      <span>Volume (litros)</span>
                    </Label>
                    <Input
                      id="volume"
                      type="number"
                      value={aquarium.volume}
                      onChange={(e) => setAquarium({...aquarium, volume: e.target.value})}
                      placeholder="Ex: 100"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="temperatura" className="flex items-center space-x-1">
                      <Thermometer className="h-4 w-4" />
                      <span>Temperatura (°C)</span>
                    </Label>
                    <Input
                      id="temperatura"
                      type="number"
                      step="0.1"
                      value={aquarium.temperatura}
                      onChange={(e) => setAquarium({...aquarium, temperatura: e.target.value})}
                      placeholder="Ex: 26.5"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="ph" className="flex items-center space-x-1">
                    <TestTube className="h-4 w-4" />
                    <span>pH da Água</span>
                  </Label>
                  <Input
                    id="ph"
                    type="number"
                    step="0.1"
                    min="0"
                    max="14"
                    value={aquarium.ph}
                    onChange={(e) => setAquarium({...aquarium, ph: e.target.value})}
                    placeholder="Ex: 7.0"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="especies">Espécies Atuais</Label>
                  <Textarea
                    id="especies"
                    value={aquarium.especies}
                    onChange={(e) => setAquarium({...aquarium, especies: e.target.value})}
                    placeholder="Liste os peixes que já estão no aquário..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="plantas">Plantas Atuais</Label>
                  <Textarea
                    id="plantas"
                    value={aquarium.plantas}
                    onChange={(e) => setAquarium({...aquarium, plantas: e.target.value})}
                    placeholder="Liste as plantas que já estão no aquário..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="observacoes">Observações Adicionais</Label>
                  <Textarea
                    id="observacoes"
                    value={aquarium.observacoes}
                    onChange={(e) => setAquarium({...aquarium, observacoes: e.target.value})}
                    placeholder="Equipamentos, filtros, iluminação, etc..."
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-ocean text-white hover:shadow-aqua transition-all duration-300"
                  size="lg"
                >
                  <Fish className="h-5 w-5 mr-2" />
                  Gerar Recomendações IA
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recomendações da IA */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Droplets className="h-5 w-5 text-secondary" />
                  <span>Recomendações da IA</span>
                </CardTitle>
                <CardDescription>
                  Baseado nos parâmetros do seu aquário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 hover:shadow-soft transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <span className="text-2xl">{rec.image}</span>
                          <div>
                            <h4 className="font-semibold text-foreground">{rec.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{rec.reason}</p>
                            <div className="flex items-center mt-2">
                              <span className="text-xs text-muted-foreground">Compatibilidade: </span>
                              <div className="flex items-center ml-2">
                                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                                  <div 
                                    className="h-full bg-gradient-to-r from-destructive via-yellow-500 to-success rounded-full transition-all duration-500"
                                    style={{ width: `${rec.compatibility}%` }}
                                  />
                                </div>
                                <span className="ml-2 text-sm font-medium text-foreground">{rec.compatibility}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Dicas da IA */}
            <Card className="shadow-soft border-secondary/20">
              <CardHeader>
                <CardTitle className="text-secondary">💡 Dicas da IA</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mantenha a temperatura estável entre 24-26°C para peixes tropicais</li>
                  <li>• Teste o pH semanalmente e mantenha entre 6.5-7.5</li>
                  <li>• Adicione plantas para melhorar a qualidade da água</li>
                  <li>• Evite superpopulação: 1cm de peixe por litro de água</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeuAquario;