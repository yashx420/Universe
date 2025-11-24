import { Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState, useRef, useEffect } from "react";
import { MarkdownMessage } from "./MarkdownMessage";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function LoadingDots() {
  return (
    <div className="flex gap-1 items-center">
      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
      <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  );
}

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "# Welcome to AI Assistant\n\nHi! I'm your AI assistant. I can help you with:\n\n- **Course Questions** - Get detailed explanations on any subject\n- **Study Tips** - Learn effective study techniques and strategies\n- **Wellness Advice** - Balance your academics with self-care\n- **Project Help** - Assistance with assignments and projects\n\n## How can I help?\n\nJust ask me anything and I'll provide you with helpful, detailed responses. I can explain complex concepts, provide code examples, and much more!\n\nWhat would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `# Response to Your Question\n\nGreat question! Here's my detailed response:\n\n## Key Points\n\n1. **First Point** - This is an important concept you should understand\n2. **Second Point** - Building on the first point\n3. **Third Point** - Additional insights\n\n### Code Example\n\n\`\`\`python\ndef example_function(x):\n    return x ** 2 + 1\n\nresult = example_function(5)\nprint(result)  # Output: 26\n\`\`\`\n\n### Best Practices\n\n> Always remember to verify your understanding with practical examples. Practice makes perfect!\n\nFeels free to ask follow-up questions if you need more clarification!`,
        },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="h-[calc(100vh-12rem)] flex flex-col shadow-medium border border-border">
      <ScrollArea className="flex-1 p-6 bg-background">
        <div className="space-y-6 max-w-3xl mx-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-4 ${message.role === "user" ? "justify-end" : ""}`}
            >
              {message.role === "assistant" && (
                <Avatar className="h-9 w-9 bg-gradient-to-br from-blue-500 to-cyan-500 flex-shrink-0 mt-1">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold">
                    AI
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm rounded-br-none"
                    : "bg-muted/60 text-foreground border border-border/50 rounded-bl-none"
                }`}
              >
                {message.role === "user" ? (
                  <p className="text-sm leading-relaxed">{message.content}</p>
                ) : (
                  <div className="text-sm">
                    <MarkdownMessage content={message.content} />
                  </div>
                )}
              </div>
              {message.role === "user" && (
                <Avatar className="h-9 w-9 bg-muted border border-border flex-shrink-0 mt-1">
                  <AvatarFallback className="text-xs font-bold">U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4">
              <Avatar className="h-9 w-9 bg-gradient-to-br from-blue-500 to-cyan-500 flex-shrink-0 mt-1">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-xs font-bold">
                  AI
                </AvatarFallback>
              </Avatar>
              <div className="bg-muted/60 text-foreground rounded-2xl px-4 py-3 border border-border/50 rounded-bl-none">
                <LoadingDots />
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
            disabled={isLoading}
          />
          <Button onClick={handleSend} size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
