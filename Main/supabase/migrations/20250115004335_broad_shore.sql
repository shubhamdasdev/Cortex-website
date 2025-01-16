/*
  # Create contacts table for waitlist submissions

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `company` (text, optional)
      - `message` (text, required)
      - `join_waitlist` (boolean, default true)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for inserting new contacts
    - Add policy for reading own contact data
*/

CREATE TABLE contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  join_waitlist boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can read own submissions"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = email);
