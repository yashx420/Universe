import { Image, Smile } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

export function CreatePost() {
  const [content, setContent] = useState("");

  return (
    <Card className="shadow-soft">
      <div className="p-4">
        <div className="flex gap-3">
          <Avatar>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              placeholder="What's on your mind?"
              className="min-h-20 resize-none border-0 focus-visible:ring-0 p-0"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <Image className="h-4 w-4" />
              <span className="hidden sm:inline">Photo</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Smile className="h-4 w-4" />
              <span className="hidden sm:inline">Emoji</span>
            </Button>
          </div>
          <Button disabled={!content.trim()}>Post</Button>
        </div>
      </div>
    </Card>
  );
}
