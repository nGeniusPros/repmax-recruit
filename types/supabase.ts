export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          role: 'athlete' | 'parent' | 'recruiter' | 'team' | 'admin'
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          role: 'athlete' | 'parent' | 'recruiter' | 'team' | 'admin'
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          role?: 'athlete' | 'parent' | 'recruiter' | 'team' | 'admin'
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      athlete_parents: {
        Row: {
          athlete_id: string
          parent_id: string
          created_at: string
        }
        Insert: {
          athlete_id: string
          parent_id: string
          created_at?: string
        }
        Update: {
          athlete_id?: string
          parent_id?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}