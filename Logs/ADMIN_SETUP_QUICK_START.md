# Admin Panel - Quick Start Guide

## 🚀 Quick Setup (5 Minutes)

### Step 1: Database Setup
Run these SQL files in your Supabase SQL Editor (in order):
1. `supabase/SUPABASE_SETUP.sql` - Base schema
2. `supabase/ADMIN_FEATURES.sql` - Admin features (blogs, campaigns, hero)

### Step 2: Create Admin User
1. Sign up on your website at `/signup`
2. Go to Supabase Dashboard → Table Editor → `users`
3. Find your user and change `role` from `'donor'` to `'admin'`
4. Log out and log back in

### Step 3: Access Admin Panel
Visit `/admin` - you should now see the admin dashboard!

## 📋 What You Can Do

### Blog Management (`/admin/blogs`)
- ✍️ Create blog posts with Markdown support
- 📝 Save as draft or publish immediately
- 🖼️ Add featured images
- ✏️ Edit existing posts
- 🗑️ Delete posts
- 👁️ View at `/blog`

### Campaign Management (`/admin/campaigns`)
- 🎯 Create fundraising campaigns
- 💰 Set goal amounts and track progress
- 📊 Visual progress bars
- ⏰ Set end dates
- 🖼️ Add campaign images
- 👁️ View at `/campaigns`

### Hero Section (`/admin/hero`)
- 🖼️ Update homepage hero image
- ✏️ Change title and subtitle
- 🔘 Customize CTA button
- 🔄 Create multiple versions
- ✅ Set one as active

## 🎨 New Features Added

### Admin Panel
- Comprehensive dashboard with statistics
- Quick action cards
- Real-time data updates
- Role-based access control

### Public Pages
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog posts
- `/campaigns` - Active campaigns listing

### Design Improvements
- Modern gradient backgrounds
- Smooth animations and transitions
- Card-based layouts
- Responsive design
- Professional color scheme
- Enhanced shadows and depth

## 📁 New Files Created

### Admin Pages
- `app/admin/page.tsx` - Admin dashboard
- `app/admin/blogs/page.tsx` - Blog management
- `app/admin/blogs/new/page.tsx` - Create blog
- `app/admin/blogs/edit/[id]/page.tsx` - Edit blog
- `app/admin/campaigns/page.tsx` - Campaign management
- `app/admin/campaigns/new/page.tsx` - Create campaign
- `app/admin/campaigns/edit/[id]/page.tsx` - Edit campaign
- `app/admin/hero/page.tsx` - Hero content management

### Public Pages
- `app/blog/page.tsx` - Blog listing
- `app/blog/[slug]/page.tsx` - Blog post detail
- `app/campaigns/page.tsx` - Campaigns listing

### Database
- `supabase/ADMIN_FEATURES.sql` - New tables and policies

### Documentation
- `Logs/ADMIN_PANEL_GUIDE.md` - Comprehensive guide
- `Logs/DESIGN_IMPROVEMENTS.md` - All improvements listed
- `ADMIN_SETUP_QUICK_START.md` - This file

## 🔧 Updated Files

### Components
- `components/HeroSection.tsx` - Now uses dynamic content from database
- `components/Navbar.tsx` - Added Blog link

### Library
- `lib/types.ts` - Added Blog, Campaign, HeroContent types
- `lib/supabase-functions.ts` - Added admin functions

### Pages
- `app/dashboard/page.tsx` - Added Admin Panel link for admins

## 🎯 Common Tasks

### Create Your First Blog Post
1. Go to `/admin/blogs`
2. Click "Create New Blog"
3. Fill in title, content, and optional image
4. Choose "Published" status
5. Click "Create Blog Post"
6. View at `/blog`

### Launch Your First Campaign
1. Go to `/admin/campaigns`
2. Click "Create New Campaign"
3. Set title, goal amount, and description
4. Add featured image (optional)
5. Set end date (optional)
6. Click "Create Campaign"
7. View at `/campaigns`

### Update Homepage Hero
1. Go to `/admin/hero`
2. Click "Create New Hero"
3. Fill in title, subtitle, description
4. Add hero image URL
5. Customize button text and link
6. Click "Create Hero Content"
7. Click "Set as Active"
8. Check homepage to see changes

## 🎨 Design Features

### Color Scheme
- Primary: Violet (#7C3AED)
- Secondary: Purple (#9333EA)
- Accent: Pink (#EC4899)

### Typography
- Headings: Playfair Display (Bold)
- Body: Inter (Regular/Medium)

### Components
- Rounded corners (rounded-xl)
- Gradient backgrounds
- Shadow effects
- Hover animations
- Status badges
- Progress bars

## 📱 Responsive Design
- Mobile-first approach
- Touch-friendly buttons
- Collapsible menus
- Optimized layouts for all screen sizes

## 🔒 Security
- Row Level Security (RLS) enabled
- Admin-only access to management pages
- Public read access for published content
- Secure authentication flow

## 🐛 Troubleshooting

### Can't access admin panel?
- Check user role is 'admin' in Supabase
- Log out and log back in
- Clear browser cache

### Images not showing?
- Ensure URLs are publicly accessible
- Use HTTPS URLs
- Check image URL format

### Database errors?
- Verify both SQL files were run
- Check RLS policies are enabled
- Review Supabase logs

## 📚 Full Documentation
- **Detailed Guide**: `Logs/ADMIN_PANEL_GUIDE.md`
- **Design Changes**: `Logs/DESIGN_IMPROVEMENTS.md`
- **Setup Guide**: `Logs/SETUP_GUIDE.md`

## 🎉 You're Ready!
Your admin panel is now fully functional. Start creating content and managing your NGO website!

## 💡 Tips
- Save blogs as drafts first, review, then publish
- Use high-quality images for better engagement
- Update hero content for special events
- Track campaign progress regularly
- Keep blog posts between 500-1500 words
- Use compelling headlines and descriptions

## 🚀 Next Steps
1. Create your first blog post
2. Launch a fundraising campaign
3. Update the hero section
4. Share your blog posts on social media
5. Monitor donation statistics
6. Engage with your community

---

Need help? Check the detailed guides in the `Logs/` folder!
