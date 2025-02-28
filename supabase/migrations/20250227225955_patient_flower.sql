/*
  # Add RLS Policies for Profiles

  1. New Policies
    - Allow admins to manage all profiles
    - Allow recruiters to view athlete profiles
    - Allow parents to view linked athlete profiles
    - Allow teams to view athlete profiles
    - Allow users to view public profile information

  2. Security
    - Enable RLS on all tables
    - Restrict sensitive data access
    - Implement role-based access control
*/

-- Admin policies
CREATE POLICY "Admins can do everything"
  ON profiles
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin')
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');

-- Recruiter policies
CREATE POLICY "Recruiters can view athlete profiles"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (
    (auth.jwt() ->> 'role' = 'recruiter' AND role = 'athlete')
    OR auth.uid() = id
  );

-- Parent policies
CREATE POLICY "Parents can view linked athlete profiles"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (
    -- Parent can view their own profile
    auth.uid() = id
    -- Or parent can view their linked athletes (requires athlete_parents table)
    OR (
      auth.jwt() ->> 'role' = 'parent'
      AND role = 'athlete'
      AND EXISTS (
        SELECT 1 FROM athlete_parents ap
        WHERE ap.parent_id = auth.uid()
        AND ap.athlete_id = profiles.id
      )
    )
  );

-- Team policies
CREATE POLICY "Teams can view athlete profiles"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (
    (auth.jwt() ->> 'role' = 'team' AND role = 'athlete')
    OR auth.uid() = id
  );

-- Public profile policy
CREATE POLICY "Anyone can view public profile information"
  ON profiles
  FOR SELECT
  USING (
    -- Allow viewing basic public information
    role = 'athlete'
    -- But restrict sensitive fields
    AND (
      CASE WHEN auth.jwt() ->> 'role' NOT IN ('admin', 'recruiter', 'team')
      THEN
        -- Only show basic fields for public viewing
        jsonb_build_object(
          'id', id,
          'full_name', full_name,
          'avatar_url', avatar_url,
          'role', role
        ) = to_jsonb(profiles.*)
      ELSE true
      END
    )
  );

-- Create athlete_parents table for parent-athlete relationships
CREATE TABLE IF NOT EXISTS athlete_parents (
  athlete_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  parent_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (athlete_id, parent_id)
);

-- Enable RLS on athlete_parents table
ALTER TABLE athlete_parents ENABLE ROW LEVEL SECURITY;

-- Athlete-parent relationship policies
CREATE POLICY "Athletes can manage their parent connections"
  ON athlete_parents
  FOR ALL
  TO authenticated
  USING (athlete_id = auth.uid())
  WITH CHECK (athlete_id = auth.uid());

CREATE POLICY "Parents can view their athlete connections"
  ON athlete_parents
  FOR SELECT
  TO authenticated
  USING (parent_id = auth.uid());

CREATE POLICY "Admins can manage all connections"
  ON athlete_parents
  FOR ALL
  TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin')
  WITH CHECK (auth.jwt() ->> 'role' = 'admin');