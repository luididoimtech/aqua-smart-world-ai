import { Link } from "react-router-dom";
import { Fish, Brain, Database, Camera, MessageSquare, Droplets, Thermometer, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import aquariumHero from "@/assets/aquarium-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Inteligente",
      description: "Assistente virtual 24/7 para responder todas suas dúvidas sobre aquarismo",
      color: "text-primary"
    },
    {
      icon: Database,
      title: "Meu Aquário",
      description: "Cadastre seu aquário e receba recomendações personalizadas de peixes e plantas",
      color: "text-secondary"
    },
    {
      icon: Camera,
      title: "Reconhecimento",
      description: "Identifique espécies de peixes e plantas através de fotos com nossa IA",
      color: "text-accent"
    },
    {
      icon: MessageSquare,
      title: "Fórum Inteligente",
      description: "Comunidade ativa com sugestões automáticas da IA para suas perguntas",
      color: "text-success"
    }
  ];

  const stats = [
    { icon: Fish, number: "150+", label: "Espécies no Banco de Dados" },
    { icon: Droplets, number: "1000+", label: "Análises de Água Realizadas" },
    { icon: Thermometer, number: "95%", label: "Precisão na IA" },
    { icon: PenTool, number: "500+", label: "Aquaristas Cadastrados" }
  ];

  return (
    <div className="min-h-screen bg-gradient-wave">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aquariumHero} 
            alt="Aquário Tropical" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-ocean opacity-90"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Fish className="h-16 w-16 text-white animate-float" />
              <Brain className="h-8 w-8 text-secondary absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            O futuro do aquarismo é
            <span className="block text-secondary animate-pulse">inteligente</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Revolucione o cuidado com seus peixes usando inteligência artificial. 
            Monitore, analise e otimize seu aquário com tecnologia de ponta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 text-lg shadow-glow hover:shadow-aqua transition-all duration-300"
            >
              <Link to="/meu-aquario">Começar Agora</Link>
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg transition-all duration-300"
            >
              <Link to="/reconhecimento">Identificar Espécie</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Funcionalidades Inteligentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubra como a inteligência artificial pode transformar seu aquário
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-aqua transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className={`h-8 w-8 ${feature.color} group-hover:animate-float`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-ocean text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <Icon className="h-8 w-8 mx-auto mb-2 text-secondary group-hover:animate-wave" />
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-gray-200 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Pronto para começar sua jornada aquática inteligente?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Junte-se a centenas de aquaristas que já revolucionaram seus aquários com nossa tecnologia
          </p>
          <Button 
            asChild
            className="bg-gradient-ocean text-white font-semibold px-8 py-4 text-lg shadow-glow hover:shadow-aqua transition-all duration-300"
          >
            <Link to="/meu-aquario">Cadastrar Meu Aquário</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
