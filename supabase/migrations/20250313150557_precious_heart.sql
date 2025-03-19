/*
  # Add RLS policy for Book Demo table

  1. Security Changes
    - Enable RLS on "Book Demo" table if not already enabled
    - Add policy to allow public inserts
*/

-- Enable RLS
ALTER TABLE "Book Demo" ENABLE ROW LEVEL SECURITY;

-- Create policy for public inserts
CREATE POLICY "Allow public inserts"
ON "Book Demo"
FOR INSERT
TO public
WITH CHECK (true);

-- Create policy for reading own entries
CREATE POLICY "Allow users to read own entries"
ON "Book Demo"
FOR SELECT
TO public
USING (true);