-- Grant table-level permissions to anon and authenticated roles
-- RLS policies alone aren't enough — the role needs GRANT permission too

GRANT INSERT ON donations TO anon;
GRANT INSERT ON donations TO authenticated;
GRANT SELECT ON donations TO authenticated;
GRANT UPDATE ON donations TO authenticated;

-- Also grant usage on the sequence for UUID generation
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;

-- Verify grants
SELECT grantee, privilege_type 
FROM information_schema.role_table_grants 
WHERE table_name = 'donations'
ORDER BY grantee, privilege_type;
