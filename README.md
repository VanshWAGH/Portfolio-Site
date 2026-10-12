# Vansh Wagh — Developer Portfolio

A minimalist, high-performance personal portfolio website for **Vansh Wagh** (QA Automation Engineer & AI Systems Builder), built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

Inspired by [piyushgarg.dev](https://www.piyushgarg.dev/) with modern card architecture, subtle glassmorphism, responsive navigation, and developer-centric aesthetics.

---

## 🚀 Features

- **Project-First Layout**: 4 featured systems with status indicators (`Building`, `In Progress`, `Planned`), tech stack badges, and interactive collapsible blueprints.
- **Engineering Philosophy & Architecture**: 7-step system design breakdown (`User flow` → `Deployment & scalability`).
- **GitHub Contribution Graph & Activity**: Live contribution heatmap embed with metrics counters.
- **Work Experience Timeline**: Vertical timeline detailing QA automation and AI framework contributions at **UBS**.
- **Curated Technical Writing**: Direct links to in-depth Hashnode articles and LinkedIn technical breakdowns.
- **Categorized Skills Grid**: Grouped into Automation/QE, AI/LLM Systems, Backend & System Design, and Platform/DevOps.
- **Sticky Glassmorphic Navigation**: Smooth scrolling, active section tracking, and mobile drawer menu.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (Turbopack, App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui tokens
- **Icons**: Lucide React + custom SVG brand icons
- **Fonts**: Inter, Raleway, Geist Mono

---

## 📂 Project Structure

```
frontend/
├── app/
│   ├── globals.css          # Design tokens & dark mode color palette
│   ├── layout.tsx           # SEO metadata & font setup
│   └── page.tsx             # Assembled single-page application
├── components/
│   ├── icons.tsx            # SVG vector icons (GitHub, LinkedIn, Hashnode)
│   ├── navbar.tsx           # Sticky glassmorphism nav with active tracking
│   ├── sections/            # Individual modular sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── github-activity.tsx
│   │   ├── experience.tsx
│   │   ├── writing.tsx
│   │   ├── skills.tsx
│   │   └── contact.tsx
│   └── ui/                  # shadcn/ui components
└── data/                    # Swappable content files
    ├── experience.ts        # Work history & highlights
    ├── projects.ts          # Featured projects & architecture specs
    ├── skills.ts            # Grouped technical competencies
    └── writing.ts           # Curated technical articles
```

---

## ⚙️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build

```bash
npm run build
npm run start
```

---

## 🚢 Free Deployment

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New"** → **"Project"**.
3. Select your repository and set the **Root Directory** to `frontend`.
4. Click **Deploy**. Vercel will build and deploy the Next.js static app with automated SSL and global CDN.

### Deploy to Render
1. Sign in to [Render](https://render.com) and click **"New"** → **"Static Site"** (or **"Web Service"**).
2. Connect your repository.
3. Configure:
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next` (or export as static HTML with `npm run build`)
