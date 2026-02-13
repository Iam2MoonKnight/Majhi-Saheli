# Saheli - Women Empowerment NGO Website

A comprehensive Next.js website for an NGO focused on empowering rural women through education, health, and vocational training. Built with TypeScript, Tailwind CSS, and Supabase for a complete full-stack solution deployable on Vercel.

## 🌟 Features

- **Responsive Design**: Mobile-first, modern, and accessible UI
- **Authentication**: Email/password authentication with Supabase
- **User Roles**: Donor and Admin roles with role-based dashboards
- **Donation Management**: Donate once or set up recurring donations
- **Impact Tracking**: Dashboard for tracking donations and impact metrics
- **Programs**: Showcase education, health, and training programs
- **Saheli Circle**: Community initiative for peer support and collective empowerment
- **Newsletter**: Email subscription management (ready for integration)
- **SEO Optimized**: Meta tags and proper semantic HTML

## 🛠️ Tech Stack

- **Frontend**: Next.js 16+ with TypeScript
- **Styling**: Tailwind CSS v4
- **Backend**: Supabase (Auth + Database + Storage)
- **Deployment**: Vercel
- **State Management**: React hooks
- **Forms**: React with built-in validation

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account (free tier available)
- Vercel account (for deployment)

## ⚙️ Setup Instructions

### 1. Clone and Install

```bash
npm install
```

### 2. Configure Supabase

1. Go to [Supabase](https://supabase.com) and create a new project
2. Create a new database (choose your region)
3. Get your API credentials:
   - Project URL (NEXT_PUBLIC_SUPABASE_URL)
   - Anon Key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
   - Service Role Key (SUPABASE_SERVICE_ROLE_KEY)

### 3. Create Database Tables

Run the SQL from `supabase/SUPABASE_SETUP.sql` in Supabase SQL Editor

### 4. Update Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 🚀 Running Locally

```bash
npm run dev
# Open browser to http://localhost:3000
```

## 📁 Project Structure

```
app/
  ├── page.tsx              # Home page
  ├── about/page.tsx        # About page
  ├── programs/page.tsx     # Programs listing
  ├── donate/page.tsx       # Donation form
  ├── impact/page.tsx       # Impact metrics
  ├── contact/page.tsx      # Contact form
  ├── saheli-circle/page.tsx # Community page
  ├── login/page.tsx        # Login page
  ├── signup/page.tsx       # Signup page
  ├── dashboard/page.tsx    # User dashboard
  ├── layout.tsx            # Root layout
  └── globals.css           # Global styles

components/
  ├── Navbar.tsx
  ├── Footer.tsx
  ├── HeroSection.tsx
  ├── ProgramCard.tsx
  ├── StatCard.tsx
  ├── TestimonialCard.tsx
  ├── DonationForm.tsx
  ├── ContactForm.tsx
  ├── LoginForm.tsx
  └── SignupForm.tsx

lib/
  ├── supabase.ts
  ├── supabase-functions.ts
  └── types.ts

Logs/                        # Documentation & guides
supabase/                    # Supabase setup files
```

## 🔐 Authentication Flow

1. **Signup**: User creates account → Profile created with role='donor'
2. **Login**: Email/password authentication via Supabase
3. **Admin Role**: Manually assign in Supabase by updating user role to 'admin'
4. **Dashboard**: Different views based on user role

## 💰 Donation Flow

1. User fills donation form
2. Data stored in donations table
3. Donors can view their donations in dashboard
4. Admins can view all donations and statistics

## 🚀 Deployment on Vercel

1. Push to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy (automatic!)

## 📚 Full Documentation

- **Quick Start**: See `Logs/QUICK_START.md`
- **Detailed Setup**: See `Logs/SETUP_GUIDE.md`
- **Project Completion**: See `Logs/PROJECT_COMPLETION.md`
