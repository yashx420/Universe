import { Heart, MessageCircle, Share2, MoreHorizontal, Globe, School } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

interface PostCardProps {
  author: {
    name: string;
    avatar?: string;
    university: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  isGlobal?: boolean;
}

export function PostCard({ author, content, image, timestamp, likes, comments, isGlobal }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all">
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-card-foreground">{author.name}</h3>
                {isGlobal ? (
                  <span className="text-xs bg-gradient-accent text-white px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    Inter-Campus
                  </span>
                ) : (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                    <School className="h-3 w-3" />
                    Intra-Campus
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{author.university}</p>
              <p className="text-xs text-muted-foreground">{timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <p className="text-card-foreground mb-3">{content}</p>

        {image && (
          <img
            src={image}
            alt="Post content"
            className="w-full rounded-lg mb-3 max-h-96 object-cover"
          />
        )}

        <div className="flex items-center gap-4 pt-3 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            className={`gap-2 ${liked ? "text-accent" : ""}`}
            onClick={handleLike}
          >
            <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
            <span>{likeCount}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>{comments}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
