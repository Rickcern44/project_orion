import createClient from '@supabase/supabase-js'


export const supabase = createClient(process.env.supabase_url, env.supabase_api_key)
