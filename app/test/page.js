import { createClient } from "@/utils/supabase/server";

export default async function Vendors() {
  const supabase = createClient();
  const { data: vendors } = await supabase.from("vendor_details").select();

  return <pre>{JSON.stringify(vendors, null, 2)}</pre>
}