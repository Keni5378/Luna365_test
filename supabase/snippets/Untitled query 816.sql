create table reservations (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  mobile text not null,
  guests integer not null,
  booking_date date not null,
  booking_time time not null
);