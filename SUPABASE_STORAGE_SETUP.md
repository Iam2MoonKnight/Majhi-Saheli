# Supabase Storage Setup for Image Uploads

## Overview
The admin panel now supports image uploads for blogs, campaigns, and hero content. Images are stored in Supabase Storage instead of requiring external URLs.

## Setup Instructions

### 1. Create Storage Bucket

1. Go to your Supabase project dashboard
2. Navigate to **Storage** in the left sidebar
3. Click **New bucket**
4. Configure the bucket:
   - **Name**: `images`
   - **Public bucket**: ✅ Enable (so images are publicly accessible)
   - **File size limit**: 5MB (optional, can be adjusted)
   - **Allowed MIME types**: Leave empty or specify: `image/jpeg, image/jpg, image/png, image/webp, image/gif`

### 2. Set Bucket Policies (Important!)

After creating the bucket, you need to set up policies to allow uploads and public access:

#### Policy 1: Allow Public Read Access
```sql
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'images' );
```

#### Policy 2: Allow Authenticated Users to Upload
```sql
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK ( bucket_id = 'images' );
```

#### Policy 3: Allow Authenticated Users to Update
```sql
CREATE POLICY "Authenticated users can update images"
ON storage.objects FOR UPDATE
TO authenticated
USING ( bucket_id = 'images' );
```

#### Policy 4: Allow Authenticated Users to Delete
```sql
CREATE POLICY "Authenticated users can delete images"
ON storage.objects FOR DELETE
TO authenticated
USING ( bucket_id = 'images' );
```

### 3. Alternative: Use Supabase Dashboard UI

Instead of SQL, you can create policies through the UI:

1. Go to **Storage** → **Policies** tab
2. Click **New Policy**
3. Select the operation type (SELECT, INSERT, UPDATE, DELETE)
4. Choose **For all users** or **For authenticated users only**
5. Add the policy

## Features Implemented

### Image Upload Functionality
- ✅ File upload with drag-and-drop interface
- ✅ Image preview before submission
- ✅ File validation (type and size)
- ✅ Support for JPEG, PNG, WebP, and GIF
- ✅ Maximum file size: 5MB
- ✅ Automatic unique filename generation
- ✅ Loading states during upload

### Admin Pages Updated
1. **Blog Management**
   - `/admin/blogs/new` - Create new blog with image upload
   - `/admin/blogs/edit/[id]` - Edit blog with image upload

2. **Campaign Management**
   - `/admin/campaigns/new` - Create new campaign with image upload
   - `/admin/campaigns/edit/[id]` - Edit campaign with image upload

3. **Hero Content Management**
   - `/admin/hero` - Manage hero section with image upload

## How It Works

### Upload Process
1. User selects an image file from their device
2. File is validated (type and size)
3. Image preview is shown immediately
4. On form submission, image is uploaded to Supabase Storage
5. Public URL is generated and saved to database
6. Form data is submitted with the image URL

### File Naming
Images are automatically renamed with a unique identifier:
```
Format: {random-string}-{timestamp}.{extension}
Example: abc123xyz-1234567890.jpg
```

This prevents filename conflicts and ensures uniqueness.

## Testing

### Test the Upload Feature
1. Log in as admin
2. Go to any admin page (blogs, campaigns, or hero)
3. Click "Create New" or "Edit"
4. Click the image upload area
5. Select an image from your device
6. Verify the preview appears
7. Submit the form
8. Check that the image displays correctly on the public page

### Troubleshooting

**Issue**: Upload fails with "Failed to upload image"
- **Solution**: Check that the `images` bucket exists and policies are set correctly

**Issue**: Images don't display on public pages
- **Solution**: Ensure the bucket is set to **Public** and SELECT policy is enabled

**Issue**: "Invalid image file" error
- **Solution**: Check file type (must be JPEG, PNG, WebP, or GIF) and size (max 5MB)

**Issue**: Upload button stays disabled
- **Solution**: Check browser console for errors, verify Supabase connection

## File Structure

```
lib/
  upload-image.ts          # Upload helper functions
  
app/admin/
  blogs/
    new/page.tsx          # Blog creation with upload
    edit/[id]/page.tsx    # Blog editing with upload
  campaigns/
    new/page.tsx          # Campaign creation with upload
    edit/[id]/page.tsx    # Campaign editing with upload
  hero/
    page.tsx              # Hero management with upload
```

## Security Notes

- Only authenticated users can upload images
- File type validation prevents malicious uploads
- File size limit prevents storage abuse
- Unique filenames prevent overwrites
- Public read access allows images to display on website

## Next Steps

1. Create the `images` bucket in Supabase Storage
2. Set up the required policies
3. Test image uploads in the admin panel
4. Monitor storage usage in Supabase dashboard
