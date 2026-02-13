# Detailed Setup Guide - Saheli NGO Website

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Supabase Configuration](#supabase-configuration)
4. [Environment Variables](#environment-variables)
5. [Running the Application](#running-the-application)
6. [Vercel Deployment](#vercel-deployment)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required Software
- **Node.js**: Version 18 or higher
- **npm**: Comes with Node.js
- **Git**: For version control
- **Code Editor**: VS Code recommended

### Online Accounts
- **Supabase** account (free): https://supabase.com
- **Vercel** account (free): https://vercel.com
- **GitHub** account: https://github.com

### Verify Installation
```bash
node --version    # Should be 18+
npm --version     # Should be 8+
git --version
```

---

## Local Development Setup

### Step 1: Set Up Project

```bash
cd "f:\Shariq Code\Majhi Saheli"
npm install
```

### Step 2: Verify Installation

```bash
npm list
# Should show react, next, tailwindcss, @supabase/supabase-js installed
```

---

## Supabase Configuration

### Step 1: Create Supabase Project

1. Go to [Supabase](https://supabase.com) and sign up (free)
2. Click "New project"
3. Fill in project details:
   - **Project Name**: majhi-saheli
   - **Database Password**: Create a strong password
   - **Region**: Choose closest to your users
4. Click "Create new project"
5. Wait ~2 minutes for database to initialize

### Step 2: Get Your API Keys

1. Go to Project Settings → API
2. Copy these keys:
   - **Project URL** (under "Project URL")
   - **anon/public** key (under "API keys")
   - **service_role** key (under "API keys")

Keep these safe!

### Step 3: Create Database Tables

1. In Supabase, go to "SQL Editor"
2. Click "New Query"
3. Open `supabase/SUPABASE_SETUP.sql` from your project
4. Copy and paste all the SQL
5. Click "Run"

### Step 4: Configure Authentication

1. Go to Authentication → Providers
2. Ensure "Email" provider is enabled (default)
3. Go to Authentication → URL Configuration
4. Set your site URLs:
   - Local: `http://localhost:3000`
   - Production: `https://yourdomain.vercel.app`

---

## Environment Variables

### Step 1: Create .env.local File

In the project root (same folder as package.json):

```bash
# Create the file
New-Item -Path .\.env.local -Type File
```

### Step 2: Add Your Supabase Keys

Open `.env.local` and add:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

Replace with your actual keys from Supabase!

### Step 3: Verify It Works

```bash
npm run dev
# If server starts on port 3000, you're good!
```

---

## Running the Application

### Development Server

```bash
npm run dev
```

Then open: http://localhost:3000

### Build for Production

```bash
npm run build
npm run start
```

### Run Linting

```bash
npm run lint
```

---

## Test Features Locally

### 1. Test Authentication
- Go to http://localhost:3000/signup
- Create a test account
- You should receive a confirmation email

### 2. Test Donation Form
- Go to http://localhost:3000/donate
- Fill out and submit
- Check Supabase dashboard → donations table to verify

### 3. Test Dashboard
- Login at http://localhost:3000/login
- Go to http://localhost:3000/dashboard
- See your donations

---

## Vercel Deployment

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Add your 3 environment variables
5. Click "Deploy"

**Your site is live!** 🌍

---

## Troubleshooting

### Problem: "Missing environment variables"
```
Error: Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL
```
**Solution**: 
- Check `.env.local` file exists in project root
- Verify all three keys are present
- Restart dev server: `npm run dev`

### Problem: "Can't connect to Supabase"
```
Error: fetch failed
```
**Solution**:
- Verify keys are correct (no typos)
- Check Supabase project is active
- Make sure `NEXT_PUBLIC_SUPABASE_URL` starts with `https://`
- Verify network connection

### Problem: "Donation not saving"
```
Error: table "donations" does not exist
```
**Solution**:
- Check Supabase project is created
- Run SQL from `supabase/SUPABASE_SETUP.sql`
- Verify `donations` table exists in Supabase

### Problem: "Dev server won't start"
```bash
# Kill any running processes
taskkill /IM node.exe /F

# Clear and reinstall
rm -r node_modules package-lock.json
npm install

# Try again
npm run dev
```

### Problem: "Build fails with TypeScript errors"
```bash
# Check for syntax errors
npm run lint

# Fix issues and rebuild
npm run build
```
