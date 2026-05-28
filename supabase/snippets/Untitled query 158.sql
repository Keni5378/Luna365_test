-- 1. Table for tracking the Landing Page Announcement banner text and toggle state
create table public.announcements (
  id uuid default gen_random_uuid() primary key,
  updated_at timestamp with time zone default now() not null,
  text_content text not null,
  is_active boolean default true not null
);

-- Insert an initial baseline announcement row so the database isn't empty
insert into public.announcements (text_content, is_active) 
values ('Welcome to Luna 365 Bar and Kitchen. Experience the celestial vibe.', true);

-- 2. Table to keep track of public image links uploaded to the gallery section
create table public.gallery_items (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now() not null,
  image_url text not null,
  title text,
  display_order integer default 0
);

-- Disable Row-Level Security on both new tables so your dashboard can read/write instantly
alter table public.announcements disable row level security;
alter table public.gallery_items disable row level security;