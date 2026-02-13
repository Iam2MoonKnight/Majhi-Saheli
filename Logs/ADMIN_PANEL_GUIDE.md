# Admin Panel Setup & Usage Guide

## Overview

The Saheli NGO website now includes a comprehensive admin panel that allows administrators to:
- Create and manage blog posts
- Create and manage fundraising campaigns
- Update the homepage hero section content and images
- View donation statistics and analytics

## Database Setup

### Step 1: Run the Base Schema
First, ensure you've run the base schema from `supabase/SUPABASE_SETUP.sql` in your Supabase SQL Editor.

### Step 2: Run the Admin Features Schema
Run the SQL from `supabase/ADMIN_FEATURES.sql` in your Supabase SQL Editor. This creates:
- `blogs` table - For blog post management
- `campaigns` table - For fundraising campaigns
- `hero_content` table - For homepage hero section management

## Setting Up an Admin User

By default, new users are created with the 'donor' role. To make a user an admin:

1. Go to your Supabase Dashboard
2. Navigate to Table Editor → `users` table
3. Find the user you want to make an admin
4. Edit the `role` field and change it from 'donor' to 'admin'
5. Save the changes

## Admin Panel Features

### Accessing the Admin Panel

1. Log in with an admin account
2. Go to `/admin` or click "Admin Panel" from your dashboard
3. You'll see the admin dashboard with quick stats and actions

### Blog Management

**Create a Blog Post:**
1. Navigate to Admin Panel → Blogs → Create New Blog
2. Fill in the required fields:
   - **Title**: The blog post title
   - **Slug**: URL-friendly version (auto-generated from title)
   - **Excerpt**: Brief summary (optional)
   - **Content**: Full blog content (supports basic Markdown)
   - **Featured Image**: URL to an image (optional)
   - **Status**: Draft or Published

3. Click "Create Blog Post"

**Manage Blogs:**
- View all blogs at `/admin/blogs`
- Filter by status (All, Published, Drafts)
- Edit, Publish/Unpublish, or Delete blogs
- Published blogs appear at `/blog`

**Blog Features:**
- Automatic slug generation from title
- Draft/Published status
- Featured images
- Basic Markdown support in content
- SEO-friendly URLs

### Campaign Management

**Create a Campaign:**
1. Navigate to Admin Panel → Campaigns → Create New Campaign
2. Fill in the required fields:
   - **Title**: Campaign name
   - **Slug**: URL-friendly identifier
   - **Description**: Campaign details and goals
   - **Goal Amount**: Target fundraising amount
   - **Currency**: INR, USD, or EUR
   - **Featured Image**: Campaign image URL (optional)
   - **End Date**: Campaign deadline (optional)
   - **Status**: Active or Paused

3. Click "Create Campaign"

**Manage Campaigns:**
- View all campaigns at `/admin/campaigns`
- See real-time progress bars showing raised vs goal amounts
- Edit campaign details
- Pause/Activate campaigns
- Delete campaigns
- Active campaigns appear at `/campaigns`

**Campaign Features:**
- Progress tracking (raised amount vs goal)
- Visual progress bars
- End date countdown
- Featured images
- Multiple currency support
- Status management (Active, Paused, Completed)

### Hero Section Management

**Update Homepage Hero:**
1. Navigate to Admin Panel → Hero Section
2. Click "Create New Hero" or edit existing content
3. Fill in the fields:
   - **Title**: Main headline
   - **Subtitle**: Secondary headline
   - **Description**: Supporting text
   - **Button Text**: CTA button label
   - **Button Link**: Where the button leads
   - **Hero Image URL**: Background/featured image

4. Click "Create Hero Content"
5. Click "Set as Active" to make it live on the homepage

**Hero Features:**
- Multiple hero content versions
- Only one active at a time
- Easy switching between versions
- Custom CTA buttons
- Image support
- Real-time preview on homepage

## Public Pages

### Blog
- **URL**: `/blog`
- Shows all published blog posts
- Card-based grid layout
- Click any post to read full content

### Individual Blog Post
- **URL**: `/blog/[slug]`
- Full blog post with featured image
- Formatted content
- CTA to donate

### Campaigns
- **URL**: `/campaigns`
- Shows all active campaigns
- Progress bars and statistics
- Direct donation links

## Design Improvements

### Enhanced UI/UX
- Modern gradient backgrounds
- Smooth hover animations
- Card-based layouts
- Responsive design for all screen sizes
- Professional color scheme (violet/purple theme)
- Shadow effects and depth
- Loading states and transitions

### Navigation Updates
- Added "Blog" link to main navigation
- Admin Panel link in dashboard for admin users
- Breadcrumb navigation in admin pages
- Quick action cards on admin dashboard

### Visual Enhancements
- Progress bars for campaigns
- Status badges (Published, Draft, Active, Paused)
- Featured images throughout
- Gradient headers
- Icon usage for better visual hierarchy
- Empty states with helpful messages

## Best Practices

### Blog Posts
- Use clear, descriptive titles
- Add featured images for better engagement
- Write compelling excerpts
- Use Markdown for formatting (# for headers, etc.)
- Save as draft first, review, then publish

### Campaigns
- Set realistic goal amounts
- Use high-quality featured images
- Write detailed descriptions
- Set end dates to create urgency
- Update raised amounts regularly (manual for now)

### Hero Content
- Keep titles short and impactful
- Use high-resolution images
- Test different versions to see what works
- Update for special events or campaigns
- Ensure CTA buttons lead to relevant pages

## Troubleshooting

### Can't Access Admin Panel
- Verify your user role is set to 'admin' in Supabase
- Log out and log back in
- Check browser console for errors

### Images Not Showing
- Ensure image URLs are publicly accessible
- Use HTTPS URLs
- Check image URL format
- Consider using Supabase Storage for hosting

### Campaigns Not Updating
- Raised amounts must be updated manually in admin panel
- Check campaign status is set to 'active'
- Verify end date hasn't passed

## Future Enhancements

Potential additions for the admin panel:
- Rich text editor for blog posts
- Image upload functionality (Supabase Storage integration)
- Campaign donation tracking automation
- Email notifications for new donations
- Analytics dashboard
- User management interface
- Comment system for blogs
- Social media sharing buttons
- Newsletter integration

## Support

For issues or questions:
1. Check the Supabase logs for errors
2. Review browser console for client-side errors
3. Verify database permissions (RLS policies)
4. Ensure all environment variables are set correctly

## Security Notes

- Only users with 'admin' role can access admin panel
- Row Level Security (RLS) policies protect all tables
- Admins can see all content, donors only see their own data
- Always use HTTPS in production
- Keep Supabase credentials secure
- Regularly review user roles and permissions
