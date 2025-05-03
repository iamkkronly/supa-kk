import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://heajntisnbzqysclktjl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlYWpudGlzbmJ6cXlzY2xrdGpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyMDU5MDgsImV4cCI6MjA2MTc4MTkwOH0.pc-V1K8XZ3SNTtiGZ-VE1VIh430_4_kTMdbrf_lfGyE'
);