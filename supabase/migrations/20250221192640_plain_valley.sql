/*
  # Create demo bookings table

  1. New Tables
    - `demo_bookings`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `business` (text, required)
      - `email` (text, required)
      - `message` (text, required)
      - `created_at` (timestamptz, default now())
      - `status` (text, default 'pending')

  2. Security
    - Enable RLS on `demo_bookings` table
    - Add policy for inserting new bookings
    - Add policy for reading own bookings
*/

CREATE TABLE IF NOT EXISTS demo_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE demo_bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new bookings
CREATE POLICY "Anyone can insert demo bookings"
  ON demo_bookings
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow users to read their own bookings by email
CREATE POLICY "Users can read own bookings"
  ON demo_bookings
  FOR SELECT
  TO public
  USING (email = auth.jwt()->>'email');