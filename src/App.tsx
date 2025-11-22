import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import Landing from "./pages/Landing";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";
import Events from "./pages/Events";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/feed" element={<AppLayout><Feed /></AppLayout>} />
          <Route path="/chat" element={<AppLayout><Chat /></AppLayout>} />
          <Route path="/events" element={<AppLayout><Events /></AppLayout>} />
          <Route path="/account" element={<AppLayout><Account /></AppLayout>} />
          <Route 
            path="/forums" 
            element={
              <AppLayout>
                <ComingSoon 
                  title="Forums Coming Soon" 
                  description="Engage in course-specific discussions and connect with peers. This feature is under development."
                />
              </AppLayout>
            } 
          />
          <Route 
            path="/wiki" 
            element={
              <AppLayout>
                <ComingSoon 
                  title="Knowledge Base Coming Soon" 
                  description="Access crowdsourced notes, guides, and study materials. This feature is under development."
                />
              </AppLayout>
            } 
          />
          <Route 
            path="/mentorship" 
            element={
              <AppLayout>
                <ComingSoon 
                  title="Mentorship Coming Soon" 
                  description="Get matched with peers and alumni for guidance. This feature is under development."
                />
              </AppLayout>
            } 
          />
          <Route 
            path="/research" 
            element={
              <AppLayout>
                <ComingSoon 
                  title="Research Hub Coming Soon" 
                  description="Discover research opportunities and collaborate with faculty. This feature is under development."
                />
              </AppLayout>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
