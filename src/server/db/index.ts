import "server-only"

// Export all types from schema
export type { Database } from "./schema"

// Export all query functions
export {
  // Memory queries
  getMemories,
  getMemoryById,
  createMemory,
  updateMemory,
  deleteMemory,
  
  // User queries
  getUserById,
  createUser,
  
  // Memory image queries
  getMemoryImages,
  addMemoryImage,
  deleteMemoryImage,
  
  // Tag queries
  getTags,
  createTag,
  addTagToMemory,
  removeTagFromMemory,
  
  // Utility queries
  getMemoriesByTag,
  searchMemories,
} from "./queries"

// Export type aliases for convenience
export type {
  Memory,
  MemoryInsert,
  MemoryUpdate,
  User,
  UserInsert,
  MemoryImage,
  MemoryImageInsert,
  Tag,
  TagInsert,
} from "./queries"
