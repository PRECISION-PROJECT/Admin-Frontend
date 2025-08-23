# Platform Frontend

A modern, scalable Next.js application built with TypeScript, featuring a comprehensive UI component system and robust development tooling.

## 🚀 Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5.9** - Type-safe development

### UI & Styling
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI primitives
- **shadcn/ui** - Beautiful, reusable components
- **Lucide React** - Icon library
- **next-themes** - Dark/light mode support

### State Management & Data Fetching
- **Zustand** - Lightweight state management
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling with validation

### Development Tools
- **Biome** - Fast linter and formatter
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting
- **Commitlint** - Conventional commit messages

### Additional Libraries
- **Axios** - HTTP client
- **Socket.io Client** - Real-time communication
- **date-fns & dayjs** - Date manipulation
- **Sonner** - Toast notifications
- **Embla Carousel** - Carousel component
- **Vaul** - Drawer component

## 📋 Prerequisites

- **Node.js** >= 18
- **pnpm** (recommended) or npm
- **Git**

## 🛠️ Getting Started

### 1. Environment Setup

**For Windows users:**
```bash
git config --global core.eol lf
git config --global core.autocrlf input
```

### 2. Clone & Install

```bash
# Clone the repository
git clone <repository-url>
cd Platform-Frontend

# Install dependencies
pnpm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 4. Development

```bash
# Start development server with Turbopack
pnpm dev

# Open http://localhost:3000
```

## 📜 Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run Biome linter
pnpm lint:fix     # Fix linting issues
pnpm format:check # Check code formatting
pnpm format:fix   # Fix formatting issues
pnpm type-check   # Run TypeScript type checking
```

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── layouts/        # Layout components
│   └── providers/      # Context providers
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── stores/             # Zustand stores
├── types/              # TypeScript type definitions
├── utils/              # Helper utilities
├── styles/             # Global styles
├── config/             # Configuration files
├── assets/             # Static assets
└── api/                # API utilities
```

## 🐳 Docker Deployment

### Development with Docker Compose

```bash
# Build and run with Docker Compose
docker-compose up --build

# Access the application at http://localhost:8080
```

### Production Build

```bash
# Build production image
docker build -f docker/Dockerfile -t platform-frontend .

# Run container
docker run -p 3000:3000 platform-frontend
```

## 🎨 UI Components

This project uses **shadcn/ui** components with a custom design system. Components are located in `src/components/ui/` and can be easily customized through Tailwind CSS.

### Adding New Components

```bash
# Add a new shadcn/ui component
pnpm dlx shadcn@latest add button
```

## 🔧 Configuration Files

- **`next.config.ts`** - Next.js configuration with SVG support
- **`tailwind.config.ts`** - Tailwind CSS configuration
- **`biome.json`** - Linting and formatting rules
- **`components.json`** - shadcn/ui configuration
- **`tsconfig.json`** - TypeScript configuration

## 🚀 Performance Features

- **Turbopack** - Fast development bundler
- **Standalone Output** - Optimized production builds
- **SVG Components** - Optimized SVG handling
- **Font Optimization** - Next.js font optimization
- **Image Optimization** - Built-in image optimization

## 📱 Features

- ⚡ **Fast Development** - Turbopack for instant refresh
- 🎨 **Modern UI** - Beautiful, accessible components
- 🌙 **Dark Mode** - Built-in theme switching
- 📱 **Responsive** - Mobile-first design
- 🔒 **Type Safe** - Full TypeScript support
- 🚀 **Production Ready** - Optimized builds
- 🐳 **Docker Ready** - Containerized deployment

## 🤝 Contributing

1. Follow the conventional commit format
2. Run linting and formatting before committing
3. Ensure all TypeScript types are correct
4. Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using Next.js and modern web technologies.
