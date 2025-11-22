import { Calendar, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  venue: string;
  organizer: string;
  attendees: number;
  image?: string;
  category: string;
}

export function EventCard({ title, description, date, venue, organizer, attendees, image, category }: EventCardProps) {
  return (
    <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all">
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
            {category}
          </span>
        </div>

        <h3 className="font-semibold text-lg text-card-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{venue}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{attendees} attending</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1">RSVP</Button>
          <Button variant="outline">Details</Button>
        </div>
      </div>
    </Card>
  );
}
