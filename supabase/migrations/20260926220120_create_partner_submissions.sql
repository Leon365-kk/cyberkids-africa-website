/*
# Create partner_submissions table

1. New Tables
- `partner_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — submitter's email address
  - `organization` (text) — school, nonprofit, company name
  - `role` (text) — submitter's role/title
  - `interest` (text, not null) — which focus area or program they're interested in
  - `message` (text, not null) — free-text message
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `partner_submissions`.
- This is a no-auth public site: allow anon + authenticated to INSERT so the
  partner form works without sign-in. No SELECT/UPDATE/DELETE for anon —
  submissions are write-only from the public site (admin reads via dashboard).
*/

CREATE TABLE IF NOT EXISTS partner_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text,
  role text,
  interest text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE partner_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_partner_submissions" ON partner_submissions;
CREATE POLICY "anon_insert_partner_submissions"
  ON partner_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);