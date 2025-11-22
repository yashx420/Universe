import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { User, Mail, GraduationCap, MapPin, Calendar, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">My Account</h1>
        <p className="text-muted-foreground">Manage your profile and account settings</p>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-6 mb-6">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">John Doe</h2>
              <p className="text-muted-foreground mb-3">Student at MIT</p>
              <Button variant="outline" size="sm">Change Avatar</Button>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="flex gap-2">
                  <User className="h-5 w-5 text-muted-foreground mt-2" />
                  <Input id="name" defaultValue="John Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="flex gap-2">
                  <Mail className="h-5 w-5 text-muted-foreground mt-2" />
                  <Input id="email" type="email" defaultValue="john.doe@mit.edu" disabled />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="university">University</Label>
                <div className="flex gap-2">
                  <GraduationCap className="h-5 w-5 text-muted-foreground mt-2" />
                  <Input id="university" defaultValue="Massachusetts Institute of Technology" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="major">Major</Label>
                <div className="flex gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-2" />
                  <Input id="major" defaultValue="Computer Science" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="year">Academic Year</Label>
                <div className="flex gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground mt-2" />
                  <Input id="year" defaultValue="Junior (3rd Year)" />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About Me</h3>
              <textarea
                className="w-full min-h-32 p-3 rounded-md border border-input bg-background"
                placeholder="Tell others about yourself, your interests, and goals..."
                defaultValue="Passionate about machine learning and artificial intelligence. Love collaborating on open-source projects and participating in hackathons."
              />
            </div>

            <div className="flex gap-3 justify-end">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Account Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">127</div>
              <div className="text-sm text-muted-foreground">Posts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">453</div>
              <div className="text-sm text-muted-foreground">Connections</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Events Attended</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">89</div>
              <div className="text-sm text-muted-foreground">Contributions</div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-destructive">Danger Zone</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Log Out</p>
                <p className="text-sm text-muted-foreground">Sign out of your account</p>
              </div>
              <Button variant="outline" onClick={handleLogout} className="gap-2">
                <LogOut className="h-4 w-4" />
                Log Out
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-destructive">Delete Account</p>
                <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
              </div>
              <Button variant="destructive">Delete</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
