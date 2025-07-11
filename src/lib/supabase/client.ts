import { createBrowserClient } from "@supabase/ssr"
import { Database } from "@/src/server/db/schema"

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
} 