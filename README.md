# Precision Admin Frontend

A comprehensive, modern admin dashboard built with Next.js 15, featuring advanced analytics, AI tools, e-commerce management, and enterprise-grade components.

## 🚀 Tech Stack

### Core Framework
- **Next.js 15.4.3** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### UI & Styling
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **ApexCharts** - Advanced data visualization
- **React Hook Form** - Form handling with validation
- **Flatpickr** - Date picker component

### State Management & Data
- **Zustand** - Lightweight state management
- **TanStack Query** - Server state management
- **Axios** - HTTP client

### Advanced Features
- **FullCalendar** - Calendar integration
- **React DnD** - Drag and drop functionality
- **React Dropzone** - File upload handling
- **Swiper** - Touch slider component
- **SimpleBar** - Custom scrollbars
- **PrismJS** - Code syntax highlighting

### Development Tools
- **ESLint** - Code linting
- **SVGR** - SVG as React components
- **PostCSS** - CSS processing

## 📋 Prerequisites

- **Node.js** >= 18 (recommended 20.x or later)
- **npm** or **yarn** package manager

## 🛠️ Getting Started

### 1. Clone & Install

   ```bash
# Clone the repository
git clone <repository-url>
cd Admin-Frontend

# Install dependencies
   npm install
   # or
   yarn install

# Use --legacy-peer-deps if you encounter peer dependency issues
npm install --legacy-peer-deps
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 3. Development

   ```bash
# Start development server
   npm run dev
   # or
   yarn dev

# Open http://localhost:3000
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (admin)/           # Admin dashboard pages
│   │   ├── (home)/        # Dashboard home pages
│   │   ├── (others-pages)/ # Additional pages
│   │   └── (ui-elements)/ # UI component examples
│   └── (full-width-pages)/ # Full-width layouts
├── components/            # Reusable components
│   ├── ai/               # AI assistant components
│   ├── analytics/        # Analytics dashboard
│   ├── charts/           # Chart components
│   ├── ecommerce/        # E-commerce components
│   ├── form/             # Form components
│   ├── ui/               # Base UI components
│   └── ...               # Feature-specific components
├── context/              # React contexts
├── hooks/                # Custom React hooks
├── layout/               # Layout components
├── icons/                # SVG icons
└── utils/                # Utility functions
```

## 🎯 Key Features

### 📊 **Analytics Dashboard**
- Real-time metrics and KPIs
- Interactive charts and graphs
- Data visualization with ApexCharts
- Customizable dashboard widgets

### 🧠 **AI Assistant Suite**
- **Text Generator** - AI-powered content creation
- **Image Generator** - AI image generation tools
- **Code Generator** - AI code assistance
- **Video Generator** - AI video creation tools

### 🛍️ **E-commerce Management**
- Product catalog management
- Order processing and tracking
- Invoice generation and management
- Transaction monitoring
- Customer relationship management

### 📈 **Business Intelligence**
- **Analytics Dashboard** - Comprehensive business metrics
- **CRM Dashboard** - Customer relationship management
- **Logistics Dashboard** - Supply chain management
- **Marketing Dashboard** - Campaign analytics
- **SaaS Dashboard** - Software metrics
- **Stocks Dashboard** - Financial tracking

### 🔧 **Advanced Components**
- **Calendar Integration** - FullCalendar implementation
- **File Manager** - Drag & drop file handling
- **Chat System** - Real-time messaging
- **Task Management** - Kanban boards and task lists
- **Email Client** - Inbox and email management
- **Support System** - Ticket management

### 🎨 **UI Components**
- 70+ reusable UI components
- Form elements with validation
- Data tables with sorting/filtering
- Modal dialogs and notifications
- Progress bars and spinners
- Charts and data visualization

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
docker build -f docker/Dockerfile -t precision-admin .

# Run container
docker run -p 3000:3000 precision-admin
```

## 🎨 Theme & Customization

- **Dark/Light Mode** - Built-in theme switching
- **Responsive Design** - Mobile-first approach
- **Customizable Sidebar** - Collapsible navigation
- **Tailwind CSS** - Utility-first styling
- **Component Library** - Consistent design system

## 🔧 Configuration

- **`next.config.ts`** - Next.js configuration with SVG support
- **`tailwind.config.js`** - Tailwind CSS configuration
- **`tsconfig.json`** - TypeScript configuration
- **`eslint.config.mjs`** - ESLint rules

## 🚀 Performance Features

- **Next.js 15** - Latest framework optimizations
- **App Router** - Modern routing system
- **Server Components** - Optimized rendering
- **Image Optimization** - Built-in image handling
- **Code Splitting** - Automatic bundle optimization

## 📱 Responsive Design

- **Mobile-First** - Optimized for all devices
- **Breakpoint System** - Tailwind CSS responsive utilities
- **Touch-Friendly** - Mobile gesture support
- **Adaptive Layout** - Dynamic sidebar behavior

## 🔒 Security Features

- **Authentication** - Secure login system
- **Route Protection** - Protected admin routes
- **Form Validation** - Client and server-side validation
- **CSRF Protection** - Built-in security measures

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for type safety
3. Follow Tailwind CSS conventions
4. Test responsive design
5. Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using Next.js 15 and modern web technologies.
