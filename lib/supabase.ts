"use client";

import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Check if we're running on the client side
const isBrowser = typeof window !== 'undefined';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only create the Supabase client on the client side
export const supabase = isBrowser && supabaseUrl && supabaseAnonKey
  ? createClient<Database>(supabaseUrl, supabaseAnonKey)
  : null;

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  if (!isBrowser) return false;
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
      'Missing Supabase environment variables. Please click the "Connect to Supabase" button in the top right corner to set up your Supabase project.'
    );
    return false;
  }
  
  return true;
};