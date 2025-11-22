import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Users, Briefcase, Shield } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const features = [
  {
    icon: Users,
    title: "Connect with Peers",
    description: "Join intra-campus and inter-campus networks",
  },
  {
    icon: GraduationCap,
    title: "AI-Powered Learning",
    description: "Get personalized academic assistance 24/7",
  },
  {
    icon: Briefcase,
    title: "Career Opportunities",
    description: "Discover research and internship openings",
  },
];

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<"student" | "faculty" | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Image & Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Campus collaboration" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">UniVerse</h1>
            <p className="text-xl opacity-90">Your Campus, Connected</p>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                  <p className="text-sm opacity-90">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-sm opacity-75">
            Join over 10,000+ students and faculty members
          </div>
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              UniVerse
            </h1>
            <p className="text-muted-foreground">Your Campus, Connected</p>
          </div>

          <Card className="p-8 shadow-medium">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h2>
                    <p className="text-sm text-muted-foreground">
                      Sign in to continue your academic journey
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">University Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="your.email@university.edu"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-input" />
                        <span className="text-muted-foreground">Remember me</span>
                      </label>
                      <a href="#" className="text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>
                </div>
              </TabsContent>

              <TabsContent value="signup">
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Create Account</h2>
                    <p className="text-sm text-muted-foreground">
                      Join the UniVerse community today
                    </p>
                  </div>

                  {!selectedRole ? (
                    <div className="space-y-4">
                      <Label className="text-center block mb-4">I am a...</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setSelectedRole("student")}
                          className="p-6 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                        >
                          <GraduationCap className="h-12 w-12 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                          <div className="font-semibold">Student</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Undergraduate or Graduate
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedRole("faculty")}
                          className="p-6 border-2 border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all group"
                        >
                          <Briefcase className="h-12 w-12 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                          <div className="font-semibold">Faculty</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            Professor or Researcher
                          </div>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg mb-4">
                        {selectedRole === "student" ? (
                          <GraduationCap className="h-5 w-5 text-primary" />
                        ) : (
                          <Briefcase className="h-5 w-5 text-accent" />
                        )}
                        <span className="text-sm font-medium">
                          Registering as {selectedRole === "student" ? "Student" : "Faculty"}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelectedRole(null)}
                          className="ml-auto text-xs text-primary hover:underline"
                        >
                          Change
                        </button>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signup-name">Full Name</Label>
                        <Input
                          id="signup-name"
                          type="text"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email">University Email</Label>
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="your.email@university.edu"
                          required
                        />
                        <p className="text-xs text-muted-foreground">
                          Use your official university email
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-university">University</Label>
                        <Input
                          id="signup-university"
                          type="text"
                          placeholder="e.g., Massachusetts Institute of Technology"
                          required
                        />
                      </div>
                      {selectedRole === "student" && (
                        <div className="space-y-2">
                          <Label htmlFor="signup-major">Major/Field of Study</Label>
                          <Input
                            id="signup-major"
                            type="text"
                            placeholder="e.g., Computer Science"
                            required
                          />
                        </div>
                      )}
                      {selectedRole === "faculty" && (
                        <div className="space-y-2">
                          <Label htmlFor="signup-department">Department</Label>
                          <Input
                            id="signup-department"
                            type="text"
                            placeholder="e.g., Computer Science"
                            required
                          />
                        </div>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="At least 8 characters"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-confirm">Confirm Password</Label>
                        <Input
                          id="signup-confirm"
                          type="password"
                          required
                        />
                      </div>
                      <div className="flex items-start gap-2">
                        <input type="checkbox" required className="mt-1 rounded border-input" />
                        <span className="text-xs text-muted-foreground">
                          I agree to the Terms of Service and Privacy Policy
                        </span>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Creating account..." : "Create Account"}
                      </Button>
                    </form>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          <div className="text-center text-sm text-muted-foreground">
            <Shield className="h-4 w-4 inline mr-1" />
            Your data is secure and encrypted
          </div>
        </div>
      </div>
    </div>
  );
}
