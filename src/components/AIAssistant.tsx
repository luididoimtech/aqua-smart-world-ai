import { useState } from "react";
import { MessageSquare, Send, X, Fish, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      content: "Olá! Sou o assistente IA do AquaSmart. Como posso ajudar você com seu aquário hoje?",
      timestamp: new Date(),
    },
  ]);

  const quickQuestions = [
    "Como cuidar de peixes tropicais?",
    "Qual o pH ideal para meu aquário?",
    "Que plantas são compatíveis?",
    "Como tratar água turva?",
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      type: "user",
      content: message,
      timestamp: new Date(),
    };

    const aiResponse = {
      type: "ai",
      content: generateAIResponse(message),
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage, aiResponse]);
    setMessage("");
  };

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("ph") || lowerMessage.includes("acidez")) {
      return "O pH ideal para a maioria dos peixes tropicais fica entre 6.5 e 7.5. Para peixes amazônicos, prefira pH mais ácido (6.0-6.8). Teste regularmente com kits de pH e ajuste gradualmente se necessário.";
    }
    
    if (lowerMessage.includes("temperatura")) {
      return "A temperatura ideal varia por espécie: Peixes tropicais (24-28°C), Goldfish (18-22°C), Discos (28-30°C). Use um termostato confiável e monitore diariamente.";
    }
    
    if (lowerMessage.includes("aliment") || lowerMessage.includes("comida")) {
      return "Alimente com moderação: 2-3 vezes ao dia, quantidade que os peixes consomem em 2-3 minutos. Varie entre ração, alimentos vivos e vegetais. Evite superalimentação para manter a água limpa.";
    }
    
    if (lowerMessage.includes("planta")) {
      return "Plantas recomendadas para iniciantes: Elódea, Vallisneria, Anubias e Musgo de Java. Elas oxigenam a água, consomem nitratos e oferecem abrigo para os peixes.";
    }
    
    if (lowerMessage.includes("compatib") || lowerMessage.includes("espécie")) {
      return "Para compatibilidade, considere: tamanho adulto, temperamento (pacífico/agressivo), parâmetros da água similares e zona de natação. Evite misturar peixes muito pequenos com grandes.";
    }
    
    return "Interessante pergunta! Para uma resposta mais específica, recomendo descrever melhor seu aquário: tamanho, espécies atuais, parâmetros da água. Posso ajudar com cuidados gerais, compatibilidade, alimentação e manutenção.";
  };

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-ocean shadow-glow hover:shadow-aqua transition-all duration-300 animate-pulse z-50"
        size="icon"
      >
        <div className="relative">
          <MessageSquare className="h-6 w-6" />
          <Brain className="h-3 w-3 absolute -top-1 -right-1 text-secondary animate-pulse" />
        </div>
      </Button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          <Card className="relative w-full max-w-md h-[600px] shadow-2xl animate-in slide-in-from-bottom-4">
            <CardHeader className="bg-gradient-ocean text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Fish className="h-5 w-5 animate-float" />
                  <CardTitle className="text-lg">Assistente IA AquaSmart</CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col h-[calc(600px-80px)] p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="p-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Perguntas rápidas:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickQuestion(question)}
                        className="text-left justify-start text-xs h-auto py-2"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Digite sua pergunta..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    disabled={!message.trim()}
                    className="bg-gradient-ocean hover:bg-accent"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AIAssistant;