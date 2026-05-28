-- 1. Add status tracking field column to reservations table
alter table public.reservations add column if not exists status text default 'pending';

-- 2. Create site analytics traffic logs monitoring infrastructure
create table public.site_traffic_logs (
  id uuid default gen_random_uuid() primary key,
  visited_at timestamp with time zone default now() not null,
  ip_hashed text,
  session_id text
);

-- Disable Row Level Security on traffic log tracking metrics
alter table public.site_traffic_logs disable row level security;