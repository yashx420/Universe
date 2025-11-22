import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">{title}</h1>
        <p className="text-muted-foreground max-w-md">{description}</p>
        <Button onClick={() => navigate("/")} className="gap-2 mt-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Feed
        </Button>
      </div>
    </div>
  );
}
