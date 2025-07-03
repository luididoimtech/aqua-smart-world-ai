import { Link } from "react-router-dom";
import { Fish, Brain, Facebook, Instagram, Twitter, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-depth text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Fish className="h-8 w-8 text-secondary animate-float" />
                <Brain className="h-4 w-4 text-primary-glow absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold">AquaSmart</span>
            </div>
            <p className="text-gray-200 mb-6 max-w-md">
              O futuro do aquarismo é inteligente. Revolucione o cuidado com seus peixes 
              usando inteligência artificial para criar o aquário perfeito.
            </p>
            
            {/* Botão Especialista IA */}
            <Button 
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-glow"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Fale com o Especialista IA
            </Button>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-secondary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/meu-aquario" className="text-gray-200 hover:text-secondary transition-colors">
                  Meu Aquário
                </Link>
              </li>
              <li>
                <Link to="/reconhecimento" className="text-gray-200 hover:text-secondary transition-colors">
                  Reconhecimento de Espécies
                </Link>
              </li>
              <li>
                <Link to="/forum" className="text-gray-200 hover:text-secondary transition-colors">
                  Fórum da Comunidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato e Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-gray-200">
                <Mail className="h-4 w-4" />
                <span>contato@aquasmart.com.br</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-200">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-200 hover:text-secondary hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-200 hover:text-secondary hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-200 hover:text-secondary hover:bg-white/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm">
              © {currentYear} AquaSmart. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacidade" className="text-gray-200 hover:text-secondary text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-gray-200 hover:text-secondary text-sm transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;