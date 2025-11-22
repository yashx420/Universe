import { EventCard } from "@/components/events/EventCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import eventImage from "@/assets/event-placeholder.jpg";

const mockEvents = [
  {
    title: "AI & Machine Learning Workshop",
    description: "Hands-on workshop covering neural networks, deep learning, and practical ML applications.",
    date: "March 25, 2024 - 2:00 PM",
    venue: "Computer Science Building, Room 301",
    organizer: "CS Department",
    attendees: 45,
    image: eventImage,
    category: "Workshop",
  },
  {
    title: "Spring Hackathon 2024",
    description: "48-hour coding marathon with amazing prizes and networking opportunities.",
    date: "April 5-7, 2024",
    venue: "Innovation Center",
    organizer: "Tech Club",
    attendees: 120,
    image: eventImage,
    category: "Hackathon",
  },
  {
    title: "Mental Wellness Seminar",
    description: "Learn effective stress management techniques and mindfulness practices.",
    date: "March 28, 2024 - 5:00 PM",
    venue: "Student Center Auditorium",
    organizer: "Wellness Center",
    attendees: 80,
    image: eventImage,
    category: "Wellness",
  },
];

export default function Events() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Campus Events</h1>
          <p className="text-muted-foreground">
            Discover and join exciting events happening on campus
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Event
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="workshops">Workshops</TabsTrigger>
          <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
          <TabsTrigger value="wellness">Wellness</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="workshops" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.filter(e => e.category === "Workshop").map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="hackathons" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.filter(e => e.category === "Hackathon").map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="wellness" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.filter(e => e.category === "Wellness").map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
