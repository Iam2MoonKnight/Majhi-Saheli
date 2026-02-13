# Signup Issue - FIXED!

## What Was Wrong
The signup form was failing because of a mismatch between the code and database schema:
- Database table uses: `full_name`
- Code was using: `name`

## What I Fixed

### Files Updated:
1. ✅ `lib/types.ts` - Changed `name` to `full_name` in User interface
2. ✅ `components/SignupForm.tsx` - Updated to use `full_name`
3. ✅ `app/dashboard/page.tsx` - Updated to use `full_name`

### Changes Made:

**Before:**
```typescript
interface User {
  name: string;  // ❌ Wrong
}

createUserProfile({
  name: formData.name  // ❌ Wrong
})
```

**After:**
```typescript
interface User {
  full_name: string;  // ✅ Correct
}

createUserProfile({
  full_name: formData.name  // ✅ Correct
})
```

## How to Test

### Step 1: Restart Server
```bash
# If server is running, restart it
Ctrl+C
npm run dev
```

### Step 2: Test Signup
1. Go to `http://localhost:3000/signup`
2. Fill in the form:
   - Full Name: Test User
   - Email: test@example.com
   - Password: password123
   - Confirm Password: password123
3. Click "Sign Up"

### Expected Result:
✅ Account created successfully
✅ Redirected to login page
✅ Can login with the new account
✅ Profile appears in Supabase users table

## Verify in Supabase

After signup, check your Supabase dashboard:

1. Go to Supabase Dashboard
2. Navigate to Table Editor → `users`
3. You should see your new user with:
   - ✅ `full_name`: "Test User"
   - ✅ `email`: "test@example.com"
   - ✅ `role`: "donor"
   - ✅ `created_at`: timestamp

## Common Signup Issues

### Issue 1: "Email already exists"
**Solution**: Use a different email or delete the existing user from Supabase

### Issue 2: "Passwords do not match"
**Solution**: Make sure both password fields are identical

### Issue 3: "Supabase is not configured"
**Solution**: Check your `.env.local` file has:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

### Issue 4: "Failed to create profile"
**Solution**: 
1. Verify the `users` table exists in Supabase
2. Check RLS policies are enabled
3. Run `supabase/SUPABASE_SETUP.sql` if needed

## Creating an Admin User

After signing up, to make yourself an admin:

1. Go to Supabase Dashboard
2. Table Editor → `users`
3. Find your user
4. Edit the `role` field
5. Change from `'donor'` to `'admin'`
6. Save
7. Log out and log back in
8. You can now access `/admin`

## Testing Checklist

- [ ] Signup form loads without errors
- [ ] Can enter all fields
- [ ] Password validation works
- [ ] Signup creates user in Supabase
- [ ] User profile is created with correct fields
- [ ] Can login with new account
- [ ] Dashboard shows user name correctly
- [ ] Can change role to admin in Supabase
- [ ] Admin can access admin panel

## Database Schema Reference

The `users` table structure:
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,        -- ✅ This is the correct field
  role TEXT DEFAULT 'donor',
  phone TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

---

**Status**: ✅ FIXED  
**Action**: Restart server and test signup  
**Result**: Signup should work perfectly now!
