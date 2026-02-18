import { createSupabaseServerClient } from "@/lib/supabase-server"
import NavBarContent from "./navBarContent"

export default async function Navbar() {
  const supabase = await createSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return <NavBarContent user={user ?? null} />
}
