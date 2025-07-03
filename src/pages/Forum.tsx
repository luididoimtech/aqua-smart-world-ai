import { useState } from "react";
import { MessageSquare, Plus, ThumbsUp, MessageCircle, Brain, Clock, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Forum = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [showNewPost, setShowNewPost] = useState(false);

  const forumPosts = [
    {
      id: 1,
      title: "Meu peixe está com pontos brancos, o que pode ser?",
      author: "AquaristaIniciante",
      time: "2 horas atrás",
      content: "Notei alguns pontos brancos pequenos no corpo do meu Neon Tetra. Alguém sabe o que pode ser?",
      category: "Doenças",
      likes: 5,
      replies: 8,
      hasAIResponse: true,
      aiSuggestion: "Baseado na descrição, pode ser íctio (doença dos pontos brancos). Recomendo isolamento e tratamento específico."
    },
    {
      id: 2,
      title: "Qual o melhor filtro para aquário de 200L?",
      author: "PeixeLouco",
      time: "5 horas atrás",
      content: "Estou montando um aquário de 200 litros e preciso de dicas sobre qual filtro usar. Pretendo ter peixes comunitários.",
      category: "Equipamentos",
      likes: 12,
      replies: 15,
      hasAIResponse: true,
      aiSuggestion: "Para 200L comunitário, recomendo filtro canister com vazão de 800-1000L/h. Considere também um filtro UV."
    },
    {
      id: 3,
      title: "Como fazer a ciclagem do aquário corretamente?",
      author: "NovoAquarista",
      time: "1 dia atrás",
      content: "É meu primeiro aquário e quero fazer tudo certo. Como devo proceder com a ciclagem? Quanto tempo demora?",
      category: "Iniciantes",
      likes: 20,
      replies: 25,
      hasAIResponse: true,
      aiSuggestion: "Ciclagem leva 4-6 semanas. Use bactérias nitrificantes, teste ammônia/nitrito semanalmente e seja paciente."
    },
    {
      id: 4,
      title: "Plantas que crescem sem CO2 injetado?",
      author: "PlantaAquatica",
      time: "2 dias atrás",
      content: "Quero adicionar plantas ao meu aquário mas não tenho sistema de CO2. Quais plantas vocês recomendam?",
      category: "Plantas",
      likes: 18,
      replies: 22,
      hasAIResponse: true,
      aiSuggestion: "Anubias, Vallisneria, Musgo de Java e Elódea são excelentes opções que crescem bem sem CO2 adicional."
    }
  ];

  const categories = ["Todos", "Iniciantes", "Doenças", "Equipamentos", "Plantas", "Peixes"];

  const handleNewPost = () => {
    if (!newQuestion.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, escreva sua pergunta.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Pergunta publicada!",
      description: "Sua pergunta foi adicionada ao fórum. A IA já está analisando para fornecer sugestões.",
    });
    
    setNewQuestion("");
    setShowNewPost(false);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Iniciantes": "bg-primary/10 text-primary",
      "Doenças": "bg-destructive/10 text-destructive", 
      "Equipamentos": "bg-accent/10 text-accent",
      "Plantas": "bg-success/10 text-success"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-gradient-wave py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MessageSquare className="h-12 w-12 text-primary animate-float" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Fórum da Comunidade</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compartilhe experiências, tire dúvidas e receba sugestões automáticas da nossa IA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Nova Pergunta */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Nova Pergunta</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => setShowNewPost(true)}
                  className="w-full bg-gradient-ocean text-white hover:shadow-aqua transition-all duration-300"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Fazer Pergunta
                </Button>
              </CardContent>
            </Card>

            {/* Categorias */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Categorias</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant="ghost"
                      className="w-full justify-start text-left"
                      size="sm"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Estatísticas */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Perguntas Hoje</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Respostas IA</span>
                  <span className="font-semibold">28</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Usuários Online</span>
                  <span className="font-semibold">45</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Busca */}
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar no fórum..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Modal Nova Pergunta */}
            {showNewPost && (
              <Card className="shadow-aqua border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plus className="h-5 w-5 text-primary" />
                    <span>Nova Pergunta</span>
                  </CardTitle>
                  <CardDescription>
                    Nossa IA analisará sua pergunta e fornecerá sugestões automáticas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Descreva sua dúvida ou problema com o máximo de detalhes possível..."
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    rows={4}
                  />
                  <div className="flex space-x-2">
                    <Button 
                      onClick={handleNewPost}
                      className="bg-gradient-ocean text-white"
                    >
                      <Brain className="h-4 w-4 mr-2" />
                      Publicar com IA
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowNewPost(false)}
                    >
                      Cancelar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Posts do Fórum */}
            <div className="space-y-4">
              {forumPosts.map((post) => (
                <Card key={post.id} className="shadow-soft hover:shadow-aqua transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg hover:text-primary transition-colors cursor-pointer">
                          {post.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.time}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground">{post.content}</p>
                    
                    {/* Sugestão da IA */}
                    {post.hasAIResponse && (
                      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-lg p-4">
                        <div className="flex items-start space-x-2">
                          <Brain className="h-5 w-5 text-primary mt-0.5 animate-pulse" />
                          <div>
                            <p className="text-sm font-medium text-primary mb-1">Sugestão da IA AquaSmart:</p>
                            <p className="text-sm text-foreground">{post.aiSuggestion}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Ações */}
                    <div className="flex items-center space-x-6 pt-2 border-t border-border">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {post.replies} respostas
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;