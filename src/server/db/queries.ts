import "server-only"
import { createClient } from "@/src/lib/supabase/server"
import { Database } from "./schema"

export type Memory = Database["public"]["Tables"]["memories"]["Row"]
export type MemoryInsert = Database["public"]["Tables"]["memories"]["Insert"]
export type MemoryUpdate = Database["public"]["Tables"]["memories"]["Update"]

export type User = Database["public"]["Tables"]["users"]["Row"]
export type UserInsert = Database["public"]["Tables"]["users"]["Insert"]

export type MemoryImage = Database["public"]["Tables"]["memory_images"]["Row"]
export type MemoryImageInsert = Database["public"]["Tables"]["memory_images"]["Insert"]

export type Tag = Database["public"]["Tables"]["tags"]["Row"]
export type TagInsert = Database["public"]["Tables"]["tags"]["Insert"]

// Memory Queries
export async function getMemories(userId?: string): Promise<Memory[]> {
  const supabase = await createClient()
  
  let query = supabase
    .from("memories")
    .select(`
      *,
      memory_images (*),
      memory_tags (
        tags (*)
      )
    `)
    .order("date", { ascending: false })

  if (userId) {
    query = query.eq("user_id", userId)
  } else {
    query = query.eq("is_public", true)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching memories:", error)
    throw new Error("Failed to fetch memories")
  }

  return data || []
}

export async function getMemoryById(id: number): Promise<Memory | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from("memories")
    .select(`
      *,
      memory_images (*),
      memory_tags (
        tags (*)
      )
    `)
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching memory:", error)
    return null
  }

  return data
}

export async function createMemory(memory: MemoryInsert): Promise<Memory> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from("memories")
    .insert(memory)
    .select()
    .single()

  if (error) {
    console.error("Error creating memory:", error)
    throw new Error("Failed to create memory")
  }

  return data
}

export async function updateMemory(id: number, updates: MemoryUpdate): Promise<Memory> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from("memories")
    .update(updates)
    .eq("id", id)
    .select()
    .single()

  if (error) {
    console.error("Error updating memory:", error)
    throw new Error("Failed to update memory")
  }

  return data
}

export async function deleteMemory(id: number): Promise<void> {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from("memories")
    .delete()
    .eq("id", id)

  if (error) {
    console.error("Error deleting memory:", error)
    throw new Error("Failed to delete memory")
  }
}

// User Queries
export async function getUserById(id: string): Promise<User | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching user:", error)
    return null
  }

  return data
}

export async function createUser(user: UserInsert): Promise<User> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from("users")
    .insert(user)
    .select()
    .single()

  if (error) {
    console.error("Error creating user:", error)
    throw new Error("Failed to create user")
  }

  return data
}

// Memory Images Queries
export async function getMemoryImages(memoryId: number): Promise<MemoryImage[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from("memory_images")
    .select("*")
    .eq("memory_id", memoryId)
    .order("is_primary", { ascending: false })

  if (error) {
    console.error("Error fetching memory images:", error)
    throw new Error("Failed to fetch memory images")
  }

  return data || []
}

export async function addMemoryImage(image: MemoryImageInsert): Promise<MemoryImage> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from("memory_images")
    .insert(image)
    .select()
    .single()

  if (error) {
    console.error("Error adding memory image:", error)
    throw new Error("Failed to add memory image")
  }

  return data
}

export async function deleteMemoryImage(id: number): Promise<void> {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from("memory_images")
    .delete()
    .eq("id", id)

  if (error) {
    console.error("Error deleting memory image:", error)
    throw new Error("Failed to delete memory image")
  }
}

// Tags Queries
export async function getTags(): Promise<Tag[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from("tags")
    .select("*")
    .order("name")

  if (error) {
    console.error("Error fetching tags:", error)
    throw new Error("Failed to fetch tags")
  }

  return data || []
}

export async function createTag(tag: TagInsert): Promise<Tag> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from("tags")
    .insert(tag)
    .select()
    .single()

  if (error) {
    console.error("Error creating tag:", error)
    throw new Error("Failed to create tag")
  }

  return data
}

export async function addTagToMemory(memoryId: number, tagId: number): Promise<void> {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from("memory_tags")
    .insert({ memory_id: memoryId, tag_id: tagId })

  if (error) {
    console.error("Error adding tag to memory:", error)
    throw new Error("Failed to add tag to memory")
  }
}

export async function removeTagFromMemory(memoryId: number, tagId: number): Promise<void> {
  const supabase = await createClient()
  
  const { error } = await supabase
    .from("memory_tags")
    .delete()
    .eq("memory_id", memoryId)
    .eq("tag_id", tagId)

  if (error) {
    console.error("Error removing tag from memory:", error)
    throw new Error("Failed to remove tag from memory")
  }
}

// Utility Queries
export async function getMemoriesByTag(tagId: number, userId?: string): Promise<Memory[]> {
  const supabase = await createClient()
  
  let query = supabase
    .from("memories")
    .select(`
      *,
      memory_tags!inner(tag_id),
      memory_images (*)
    `)
    .eq("memory_tags.tag_id", tagId)
    .order("date", { ascending: false })

  if (userId) {
    query = query.eq("user_id", userId)
  } else {
    query = query.eq("is_public", true)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching memories by tag:", error)
    throw new Error("Failed to fetch memories by tag")
  }

  return data || []
}

export async function searchMemories(searchTerm: string, userId?: string): Promise<Memory[]> {
  const supabase = await createClient()
  
  let query = supabase
    .from("memories")
    .select(`
      *,
      memory_images (*)
    `)
    .or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,love_note.ilike.%${searchTerm}%`)
    .order("date", { ascending: false })

  if (userId) {
    query = query.eq("user_id", userId)
  } else {
    query = query.eq("is_public", true)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error searching memories:", error)
    throw new Error("Failed to search memories")
  }

  return data || []
}
