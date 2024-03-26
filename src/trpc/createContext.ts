// src/trpc/createContext.ts
export function createContext() {
    // Create and return your context here
    // For example, you could include your session/user information
    return {};
  }
  
  // The type for the context, update according to what your createContext returns
  export type Context = ReturnType<typeof createContext>;
  