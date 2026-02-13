# Quick Start Guide - Saheli NGO Website

**Want to get up and running quickly? This guide is for you!**

---

## ⚡ 5-Minute Quick Start

### Step 1: Install Dependencies (1 min)
```bash
cd "f:\Shariq Code\Majhi Saheli"
npm install
```

### Step 2: Create Environment File (1 min)
Create `.env.local` file in the project root with:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

> Get these Keys from: https://supabase.com → Your Project → Settings → API

### Step 3: Run Locally (1 min)
```bash
npm run dev
```

Open: http://localhost:3000

### Step 4: Test Features (2 mins)
- Homepage loads? ✅
- Try signup: http://localhost:3000/signup
- Try donation form: http://localhost:3000/donate
- Check dashboard: http://localhost:3000/dashboard

**Done! Your site is running locally!** 🎉

---

## 🔧 Common Tasks

### Problem: "Missing environment variables"
**Solution**: 
1. Check you created `.env.local` file
2. Add all three keys
3. Save and restart dev server

### Problem: "Can't connect to Supabase"
**Solution**:
1. Verify keys are correct (no typos)
2. Check Supabase project is active
3. Make sure `NEXT_PUBLIC_SUPABASE_URL` starts with `https://`

### Problem: "Donation not saving"
**Solution**:
1. Check Supabase project is created
2. Run SQL from `supabase/SUPABASE_SETUP.sql`
3. Verify `donations` table exists

---

## 📱 Test What Works

### Home Page (`/`)
- Hero section with CTAs
- Programs preview
- Impact stats
- Testimonials
- Partners section

### Programs (`/programs`)
- All programs displayed
- Categorized by type

### Donate (`/donate`)
- Fill donation form
- Data saves to Supabase
- Thank you message shows

### Dashboard (`/dashboard`)
- Login first
- See your donations
- Admin mode (if role = admin)

### Other Pages
- `/about` - NGO story
- `/contact` - Contact form
- `/impact` - Statistics
- `/saheli-circle` - Community
- `/login` & `/signup` - Auth

---

## 🚀 Deploy to Vercel (5 mins)

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 2. Import to Vercel
- Go to vercel.com
- Click "Import Project"
- Select your GitHub repo
- Add your 3 environment variables
- Click "Deploy"

**Your site is live!** 🌍

---

## 🎨 Quick Customizations

### Change Logo
1. Add your logo to `public/` folder
2. Open `components/Navbar.tsx`
3. Find the "S" logo element
4. Replace with your image

### Change Colors
Edit `app/globals.css`:
```css
:root {
  --primary-rose: #YOUR_COLOR;
  --primary-pink: #YOUR_COLOR;
}
```

### Update Content
Each page file in `app/` has comments showing what to change

---

## 📂 Important Files

| File | Purpose |
|------|---------|
| `.env.local` | Your Supabase keys (CREATE THIS!) |
| `app/page.tsx` | Home page |
| `app/globals.css` | Colors & global styles |
| `components/Navbar.tsx` | Navigation bar |
| `lib/supabase-functions.ts` | Database functions |

---

## 🔑 Where to Get Supabase Keys

1. Go to **supabase.com**
2. Create free account
3. Create new project
4. Go to **Settings → API**
5. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** → `SUPABASE_SERVICE_ROLE_KEY`

---

## ✅ Verify Everything Works

Run this to make sure code compiles:
```bash
npm run build
# Should complete successfully!
```

---

## 📚 Need More Details?

- **Full setup**: See `Logs/SETUP_GUIDE.md`
- **Troubleshooting**: See `Logs/SETUP_GUIDE.md#troubleshooting`
- **Project overview**: See `Logs/README.md`
- **Completion details**: See `Logs/PROJECT_COMPLETION.md`

---

## 🆘 Quick Help

### Dev Server won't start?
```bash
# Kill any running processes
taskkill /IM node.exe /F

# Clear node modules and reinstall
rm -r node_modules package-lock.json
npm install

# Try again
npm run dev
```
