# Majhi Saheli

A modern NGO website for women empowerment with Supabase-powered auth, donations, and admin management.

## Features
- Public pages: Home, About, Programs, Blog, Campaigns, Impact, Contact
- Auth: Signup/Login with Supabase
- Donor dashboard with donation history
- Admin panel for blogs, campaigns, and hero content

## Quick Start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file in the project root with:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```
3. Run the app:
   ```bash
   npm run dev
   ```

## Supabase Setup
Run the SQL files in order:
1. `supabase/SUPABASE_SETUP.sql`
2. `supabase/ADMIN_FEATURES.sql`

## Notes
- After signup, make yourself admin by updating `users.role` in Supabase.
- If email confirmation is enabled, profiles are created on first login.

## License
MIT
