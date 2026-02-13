# Admin Panel Workflow Guide

## 🎯 Complete Admin Workflow

This guide shows you the complete workflow for managing your NGO website through the admin panel.

## 📋 Table of Contents
1. [Initial Setup](#initial-setup)
2. [Daily Operations](#daily-operations)
3. [Content Management](#content-management)
4. [Campaign Management](#campaign-management)
5. [Analytics & Reporting](#analytics--reporting)

---

## Initial Setup

### Step 1: Database Configuration
```
1. Open Supabase Dashboard
2. Go to SQL Editor
3. Run SUPABASE_SETUP.sql
4. Run ADMIN_FEATURES.sql
5. Verify tables are created
```

### Step 2: Create Admin Account
```
1. Visit /signup
2. Create account with email/password
3. Go to Supabase → Table Editor → users
4. Find your user
5. Change role from 'donor' to 'admin'
6. Log out and log back in
```

### Step 3: Access Admin Panel
```
1. Log in with admin account
2. Visit /admin
3. You should see the admin dashboard
```

---

## Daily Operations

### Morning Routine
```
1. Check Admin Dashboard (/admin)
   - Review donation statistics
   - Check new donations
   - Monitor campaign progress

2. Review Content
   - Check for draft blog posts
   - Review campaign performance
   - Update raised amounts if needed

3. Respond to Activity
   - Reply to contact form submissions
   - Update community posts
   - Acknowledge donors
```

### Weekly Tasks
```
1. Content Creation
   - Write 1-2 blog posts
   - Update campaign progress
   - Share success stories

2. Analytics Review
   - Check donation trends
   - Review campaign performance
   - Analyze blog engagement

3. Content Updates
   - Update hero section for events
   - Refresh campaign images
   - Archive completed campaigns
```

---

## Content Management

### Creating a Blog Post

**Step-by-Step:**
```
1. Navigate to /admin/blogs
2. Click "Create New Blog"
3. Fill in the form:
   ├── Title: "Empowering 50 Women Through Skill Training"
   ├── Slug: Auto-generated or custom
   ├── Excerpt: Brief summary (optional)
   ├── Content: Full article with Markdown
   ├── Featured Image: URL to image
   └── Status: Draft or Published
4. Click "Create Blog Post"
5. Review at /blog
```

**Content Tips:**
- Use compelling headlines
- Add featured images for engagement
- Write 500-1500 words
- Use Markdown for formatting:
  - `# Heading 1`
  - `## Heading 2`
  - `### Heading 3`
- Include call-to-actions
- Proofread before publishing

**Workflow:**
```
Draft → Review → Edit → Publish → Share
```

### Managing Existing Blogs

**Edit a Blog:**
```
1. Go to /admin/blogs
2. Find the blog post
3. Click "Edit"
4. Make changes
5. Click "Update Blog Post"
```

**Publish a Draft:**
```
1. Go to /admin/blogs
2. Filter by "Drafts"
3. Find your draft
4. Click "Publish"
5. Confirm publication
```

**Unpublish a Blog:**
```
1. Go to /admin/blogs
2. Find published blog
3. Click "Unpublish"
4. Blog moves to drafts
```

**Delete a Blog:**
```
1. Go to /admin/blogs
2. Find the blog
3. Click "Delete"
4. Confirm deletion
⚠️ This action cannot be undone!
```

---

## Campaign Management

### Creating a Campaign

**Step-by-Step:**
```
1. Navigate to /admin/campaigns
2. Click "Create New Campaign"
3. Fill in the form:
   ├── Title: "Education for 100 Girls"
   ├── Slug: education-for-100-girls
   ├── Description: Detailed campaign info
   ├── Goal Amount: 100000
   ├── Currency: INR
   ├── Featured Image: Campaign image URL
   ├── End Date: Optional deadline
   └── Status: Active
4. Click "Create Campaign"
5. Campaign appears at /campaigns
```

**Campaign Planning:**
```
Before Creating:
├── Define clear goal
├── Set realistic target amount
├── Prepare compelling description
├── Create/find featured image
├── Determine timeline
└── Plan promotion strategy

After Creating:
├── Share on social media
├── Add to newsletter
├── Update regularly
├── Thank donors
└── Track progress
```

### Updating Campaign Progress

**Manual Update:**
```
1. Go to /admin/campaigns
2. Find the campaign
3. Click "Edit"
4. Update "Raised Amount"
5. Click "Update Campaign"
6. Progress bar updates automatically
```

**Campaign Lifecycle:**
```
Planning → Active → Monitoring → Completion → Archive

Active Campaign:
├── Regular updates
├── Donor acknowledgment
├── Progress sharing
└── Impact stories

Completed Campaign:
├── Change status to "Completed"
├── Share final results
├── Thank all donors
└── Post impact report
```

### Campaign Status Management

**Active:**
- Visible on /campaigns
- Accepting donations
- Progress tracking enabled

**Paused:**
- Not visible on /campaigns
- Temporarily stopped
- Can be reactivated

**Completed:**
- Goal reached or deadline passed
- Archived but visible in admin
- Used for reporting

---

## Hero Content Management

### Updating Homepage Hero

**Step-by-Step:**
```
1. Navigate to /admin/hero
2. Click "Create New Hero"
3. Fill in the form:
   ├── Title: "Empowering Women"
   ├── Subtitle: "Enriching Communities"
   ├── Description: Mission statement
   ├── Button Text: "Support Our Mission"
   ├── Button Link: /donate
   └── Hero Image: Image URL
4. Click "Create Hero Content"
5. Click "Set as Active"
6. Check homepage to verify
```

**Use Cases:**

**Regular Content:**
```
Title: Empowering Women
Subtitle: Enriching Communities
CTA: Support Our Mission → /donate
```

**Special Event:**
```
Title: International Women's Day
Subtitle: Celebrating 10 Years of Impact
CTA: Join the Celebration → /events
```

**Campaign Launch:**
```
Title: New Campaign Launched
Subtitle: Education for 100 Girls
CTA: Donate Now → /campaigns/education-100-girls
```

**Seasonal Update:**
```
Title: Year-End Giving
Subtitle: Double Your Impact Today
CTA: Make a Difference → /donate
```

### Hero Content Strategy

**Update Frequency:**
- Regular: Every 3-6 months
- Events: As needed
- Campaigns: For major launches
- Seasonal: Quarterly

**Best Practices:**
- Use high-quality images
- Keep titles short and impactful
- Clear call-to-action
- Test on mobile devices
- A/B test different versions

---

## Analytics & Reporting

### Dashboard Metrics

**Key Statistics:**
```
Admin Dashboard (/admin) shows:
├── Total Donations
├── Total Amount Raised
├── Number of Blogs
├── Active Campaigns
├── Recent Activity
└── Quick Actions
```

**Donation Analytics:**
```
User Dashboard (/dashboard) shows:
├── Total Donations Count
├── Total Amount Raised
├── One-time vs Recurring
├── Recent Donations
└── Donor List (admin only)
```

### Generating Reports

**Monthly Report Workflow:**
```
1. Access Admin Dashboard
2. Note key metrics:
   ├── Total donations this month
   ├── New donors
   ├── Campaign progress
   ├── Blog engagement
   └── Community growth

3. Export data (manual for now):
   ├── Screenshot dashboard
   ├── Note statistics
   ├── List top campaigns
   └── Highlight success stories

4. Create report document:
   ├── Executive summary
   ├── Key metrics
   ├── Campaign updates
   ├── Impact stories
   └── Next month goals
```

### Performance Tracking

**Blog Performance:**
```
Track manually:
├── Number of posts published
├── Topics covered
├── Engagement (future: comments, shares)
└── Traffic (integrate Google Analytics)
```

**Campaign Performance:**
```
Track in admin panel:
├── Goal vs Raised amount
├── Percentage funded
├── Days remaining
├── Donor count (via donations table)
└── Average donation size
```

---

## Best Practices

### Content Creation

**Blog Posts:**
- ✅ Write compelling headlines
- ✅ Use featured images
- ✅ Include CTAs
- ✅ Proofread carefully
- ✅ Save as draft first
- ✅ Schedule publication
- ✅ Share on social media

**Campaigns:**
- ✅ Set realistic goals
- ✅ Clear descriptions
- ✅ High-quality images
- ✅ Regular updates
- ✅ Thank donors publicly
- ✅ Share impact stories
- ✅ Archive when complete

**Hero Content:**
- ✅ Short, impactful titles
- ✅ Clear value proposition
- ✅ Strong CTAs
- ✅ Professional images
- ✅ Mobile-friendly
- ✅ Update regularly
- ✅ Test different versions

### Time Management

**Daily (15 minutes):**
- Check dashboard
- Review new donations
- Respond to urgent items

**Weekly (2 hours):**
- Create 1-2 blog posts
- Update campaigns
- Review analytics
- Plan content

**Monthly (4 hours):**
- Generate reports
- Update hero content
- Archive old content
- Plan next month

---

## Quick Reference

### Admin URLs
```
Dashboard:        /admin
Blogs:           /admin/blogs
New Blog:        /admin/blogs/new
Edit Blog:       /admin/blogs/edit/[id]
Campaigns:       /admin/campaigns
New Campaign:    /admin/campaigns/new
Edit Campaign:   /admin/campaigns/edit/[id]
Hero Content:    /admin/hero
User Dashboard:  /dashboard
```

### Public URLs
```
Homepage:        /
Blog Listing:    /blog
Blog Post:       /blog/[slug]
Campaigns:       /campaigns
Programs:        /programs
About:           /about
Contact:         /contact
Donate:          /donate
Impact:          /impact
Community:       /saheli-circle
```

### Keyboard Shortcuts
```
(Future enhancement)
Ctrl/Cmd + S:    Save draft
Ctrl/Cmd + P:    Publish
Ctrl/Cmd + K:    Quick search
Esc:             Close modal
```

---

## Troubleshooting

### Common Issues

**Can't see admin panel:**
```
1. Check user role in Supabase
2. Log out and log back in
3. Clear browser cache
4. Check browser console for errors
```

**Blog not appearing:**
```
1. Check status is "Published"
2. Verify slug is unique
3. Check published_at date
4. Review RLS policies
```

**Campaign not showing:**
```
1. Check status is "Active"
2. Verify goal amount is set
3. Check end date hasn't passed
4. Review campaign data
```

**Images not loading:**
```
1. Verify URL is publicly accessible
2. Use HTTPS URLs
3. Check image format (jpg, png, webp)
4. Test URL in browser
```

---

## Support & Resources

### Documentation
- Admin Panel Guide: `Logs/ADMIN_PANEL_GUIDE.md`
- Design Improvements: `Logs/DESIGN_IMPROVEMENTS.md`
- Quick Start: `ADMIN_SETUP_QUICK_START.md`
- Project Summary: `PROJECT_SUMMARY.md`

### Getting Help
1. Check documentation
2. Review troubleshooting section
3. Check Supabase logs
4. Review browser console
5. Contact development team

---

**Last Updated**: February 2026  
**Version**: 1.0.0  
**Status**: Production Ready ✅
