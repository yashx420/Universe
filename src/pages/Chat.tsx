import { ChatWindow } from "@/components/chat/ChatWindow";

export default function Chat() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">AI Assistant</h1>
        <p className="text-muted-foreground">
          Get help with coursework, study tips, and more
        </p>
      </div>
      
      <ChatWindow />
    </div>
  );
}
