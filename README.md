# UniVerse - AI-Powered Campus Collaboration Platform

UniVerse is a modern, full-featured platform designed to revolutionize campus collaboration by connecting students, faculty, and institutions worldwide. Built with React, TypeScript, and Tailwind CSS, it combines social networking, AI assistance, and knowledge sharing into one seamless experience.

## ✨ Features

- **Dual-Feed Social Network**: Connect within your campus and across universities with Inter-Campus and Intra-Campus feeds
- **AI Chatbot Assistant**: Get instant help with coursework, study tips, and wellness support powered by AI
- **Event Hosting & Recommendations**: Discover and create workshops, hackathons, seminars with personalized recommendations
- **Community Sub-Forums**: Join course-specific communities for discussions, notes sharing, and Q&A
- **AI-Driven Mentorship**: Connect with peers and alumni through intelligent matching based on skills and goals
- **Faculty-Student Hub**: Access research opportunities, internships, and project openings directly from faculty
- **Knowledge Base**: Contribute to and access a crowdsourced wiki of study materials and guides

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **shadcn/ui** - Beautiful component library
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (shadcn)
│   ├── landing/         # Landing page components
│   ├── feed/            # Social feed components
│   ├── events/          # Event-related components
│   ├── chat/            # Chat interface components
│   └── layout/          # Layout components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── assets/              # Images and static assets
```

## 🎨 Design System

The project uses a comprehensive design system with:
- HSL-based color tokens for easy theming
- Custom gradients and shadows
- Smooth transitions and animations
- Fully responsive layouts
- Dark mode support

All design tokens are defined in `src/index.css` and `tailwind.config.ts`.

## Project Info

**Lovable Project URL**: https://lovable.dev/projects/0580cd97-7e39-40f6-8cce-1ed8a5b3a7a8

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0580cd97-7e39-40f6-8cce-1ed8a5b3a7a8) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0580cd97-7e39-40f6-8cce-1ed8a5b3a7a8) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
