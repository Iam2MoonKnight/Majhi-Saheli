-- Contact messages and newsletter subscribers
-- Run this in the Supabase SQL editor to enable the contact form and newsletter.

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;

-- Anyone (including signed-out visitors) may submit the contact form.
drop policy if exists "Anyone can submit contact messages" on contact_messages;
create policy "Anyone can submit contact messages"
on contact_messages for insert
to anon, authenticated
with check (true);

-- Only admins can read submitted messages.
drop policy if exists "Admins can read contact messages" on contact_messages;
create policy "Admins can read contact messages"
on contact_messages for select
to authenticated
using (
  exists (select 1 from users u where u.id = auth.uid() and u.role = 'admin')
);

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table newsletter_subscribers enable row level security;

-- Anyone may subscribe; duplicates are rejected by the unique index.
drop policy if exists "Anyone can subscribe to the newsletter" on newsletter_subscribers;
create policy "Anyone can subscribe to the newsletter"
on newsletter_subscribers for insert
to anon, authenticated
with check (true);
