import "server-only"


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
      users: {
        Row: {
          id: string
          email: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          created_at?: string
        }
      }
      memories: {
        Row: {
          id: number
          user_id: string | null
          date: string
          title: string
          description: string
          love_note: string
          location: string | null
          is_public: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          user_id?: string | null
          date: string
          title: string
          description: string
          love_note: string
          location?: string | null
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          user_id?: string | null
          date?: string
          title?: string
          description?: string
          love_note?: string
          location?: string | null
          is_public?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      memory_images: {
        Row: {
          id: number
          memory_id: number
          image_url: string
          alt_text: string | null
          is_primary: boolean
          created_at: string
        }
        Insert: {
          id?: number
          memory_id: number
          image_url: string
          alt_text?: string | null
          is_primary?: boolean
          created_at?: string
        }
        Update: {
          id?: number
          memory_id?: number
          image_url?: string
          alt_text?: string | null
          is_primary?: boolean
          created_at?: string
        }
      }
      tags: {
        Row: {
          id: number
          name: string
          color: string
        }
        Insert: {
          id?: number
          name: string
          color?: string
        }
        Update: {
          id?: number
          name?: string
          color?: string
        }
      }
      memory_tags: {
        Row: {
          memory_id: number
          tag_id: number
        }
        Insert: {
          memory_id: number
          tag_id: number
        }
        Update: {
          memory_id?: number
          tag_id?: number
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