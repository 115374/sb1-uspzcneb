/*
  # Update demo bookings table and policies

  1. Table Changes
    - Ensure demo_bookings table exists with all required fields
  
  2. Security
    - Enable RLS if not already enabled
    - Add policies for public inserts and user-specific reads (with existence checks)
*/

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS demo_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE demo_bookings ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DO $$ 
BEGIN
    -- Drop the insert policy if it exists
    DROP POLICY IF EXISTS "Anyone can insert demo bookings" ON demo_bookings;
    
    -- Drop the select policy if it exists
    DROP POLICY IF EXISTS "Users can read own bookings" ON demo_bookings;
    
    -- Create the insert policy
    CREATE POLICY "Anyone can insert demo bookings"
        ON demo_bookings
        FOR INSERT
        TO public
        WITH CHECK (true);
    
    -- Create the select policy
    CREATE POLICY "Users can read own bookings"
        ON demo_bookings
        FOR SELECT
        TO public
        USING (email = auth.jwt()->>'email');
END $$;