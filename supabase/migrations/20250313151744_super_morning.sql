/*
  # Fix Book Demo table structure

  1. Changes
    - Drop existing primary key constraint on businessname
    - Add proper UUID primary key
    - Make businessname a regular column (not unique)
    
  2. Security
    - Maintain existing RLS policies
*/

-- First drop the existing primary key constraint
ALTER TABLE "Book Demo" DROP CONSTRAINT IF EXISTS "Book Demo_pkey";

-- Add a new UUID primary key column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'Book Demo' AND column_name = 'id'
  ) THEN
    ALTER TABLE "Book Demo" ADD COLUMN id uuid PRIMARY KEY DEFAULT gen_random_uuid();
  END IF;
END $$;

-- Ensure RLS is enabled
ALTER TABLE "Book Demo" ENABLE ROW LEVEL SECURITY;

-- Recreate the policies (in case they were dropped)
DO $$ 
BEGIN
    -- Drop existing policies if they exist
    DROP POLICY IF EXISTS "Allow public inserts" ON "Book Demo";
    DROP POLICY IF EXISTS "Allow users to read own entries" ON "Book Demo";
    
    -- Recreate the policies
    CREATE POLICY "Allow public inserts"
        ON "Book Demo"
        FOR INSERT
        TO public
        WITH CHECK (true);
    
    CREATE POLICY "Allow users to read own entries"
        ON "Book Demo"
        FOR SELECT
        TO public
        USING (true);
END $$;