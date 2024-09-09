'use client'

import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = 'https://hkxnyafcqbkmgcsxqjkp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhreG55YWZjcWJrbWdjc3hxamtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1MzM1ODgsImV4cCI6MjAyOTEwOTU4OH0.Gr2eH5sRozhakFEvY7tgt1qN__NDTOqQNFIc87Ai-jw'; 

export function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    supabaseUrl,
    supabaseKey
  )
}