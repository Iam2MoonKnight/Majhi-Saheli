-- Check if anon role has usage on public schema
SELECT has_schema_privilege('anon', 'public', 'USAGE') AS anon_can_use_schema;

-- Check if anon role is in the public role
SELECT pg_has_role('anon', 'public', 'member') AS anon_is_public_member;

-- Grant schema usage just in case
GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;

-- Also check what the anon key JWT actually resolves to
-- by looking at the JWT role claim in your anon key
-- (decode the middle part of the JWT)
SELECT 
  convert_from(
    decode(
      split_part(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15anBlZXB4YmdlaWVueWt3cnBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NDkxODQsImV4cCI6MjEwODIyNTE4NH0.Wh8PYH0ox1ARcwKoXMw2bTTVfq2rFPX-19VYMtynjNU',
        '.', 2
      ) || '==',
      'base64'
    ),
    'UTF8'
  ) AS jwt_payload;
