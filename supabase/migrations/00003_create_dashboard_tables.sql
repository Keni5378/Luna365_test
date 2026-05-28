-- Add status tracking to reservations for accept/reject workflow
ALTER TABLE reservations
  ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending';

-- Traffic logging table for analytics dashboard
CREATE TABLE IF NOT EXISTS site_traffic_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  page TEXT NOT NULL DEFAULT '/',
  page_weight_bytes INTEGER DEFAULT 2500000
);
