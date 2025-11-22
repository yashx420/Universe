import { CreatePost } from "@/components/feed/CreatePost";
import { PostCard } from "@/components/feed/PostCard";
import { Button } from "@/components/ui/button";
import { Globe, School, TrendingUp } from "lucide-react";
import { useState } from "react";

const mockPosts = [
  {
    author: {
      name: "Sarah Johnson",
      university: "MIT",
      avatar: undefined,
    },
    content: "Just finished my Machine Learning project! The feeling when your model finally achieves 95% accuracy is unbeatable 🎉",
    timestamp: "2 hours ago",
    likes: 42,
    comments: 8,
    isGlobal: false,
  },
  {
    author: {
      name: "Alex Chen",
      university: "Stanford University",
      avatar: undefined,
    },
    content: "Looking for collaborators on an open-source project focused on sustainable tech solutions. DM me if interested!",
    timestamp: "5 hours ago",
    likes: 28,
    comments: 12,
    isGlobal: true,
  },
  {
    author: {
      name: "Emma Wilson",
      university: "MIT",
      avatar: undefined,
    },
    content: "Our robotics club is hosting a workshop next week! Sign up through the events page. Beginners welcome!",
    timestamp: "1 day ago",
    likes: 67,
    comments: 15,
    isGlobal: false,
  },
];

type FeedType = "all" | "campus" | "global";

export default function Feed() {
  const [feedType, setFeedType] = useState<FeedType>("all");

  const filteredPosts = () => {
    switch (feedType) {
      case "campus":
        return mockPosts.filter(p => !p.isGlobal);
      case "global":
        return mockPosts.filter(p => p.isGlobal);
      default:
        return mockPosts;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Campus Network</h1>
        <p className="text-muted-foreground">Connect with students across universities</p>
      </div>

      {/* Prominent Feed Type Selector */}
      <div className="bg-card rounded-lg p-2 shadow-soft mb-6 flex gap-2">
        <Button
          variant={feedType === "campus" ? "default" : "ghost"}
          className={`flex-1 gap-2 ${feedType === "campus" ? "bg-primary" : ""}`}
          onClick={() => setFeedType("campus")}
        >
          <School className="h-4 w-4" />
          <div className="text-left">
            <div className="font-semibold">Intra-Campus</div>
            <div className="text-xs opacity-80">Your University</div>
          </div>
        </Button>
        <Button
          variant={feedType === "global" ? "default" : "ghost"}
          className={`flex-1 gap-2 ${feedType === "global" ? "bg-accent" : ""}`}
          onClick={() => setFeedType("global")}
        >
          <Globe className="h-4 w-4" />
          <div className="text-left">
            <div className="font-semibold">Inter-Campus</div>
            <div className="text-xs opacity-80">Global Network</div>
          </div>
        </Button>
        <Button
          variant={feedType === "all" ? "default" : "ghost"}
          className={`flex-1 gap-2 ${feedType === "all" ? "bg-gradient-primary" : ""}`}
          onClick={() => setFeedType("all")}
        >
          <TrendingUp className="h-4 w-4" />
          <div className="text-left">
            <div className="font-semibold">All Posts</div>
            <div className="text-xs opacity-80">Combined Feed</div>
          </div>
        </Button>
      </div>
      
      <CreatePost />

      <div className="mt-6 space-y-4">
        {filteredPosts().map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
