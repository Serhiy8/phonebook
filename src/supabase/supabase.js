import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://khcpewvyfcqhhmxnrtlt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoY3Bld3Z5ZmNxaGhteG5ydGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NTQyODYsImV4cCI6MjA2NzUzMDI4Nn0.HCMrwN2vGmZWrFK-1MWiLhl7S5ErWz8QVCpGqO_OA4g';
export const supabase = createClient(supabaseUrl, supabaseKey);
