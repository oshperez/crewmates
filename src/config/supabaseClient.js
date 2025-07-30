import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const createCrewmate = async (formData) => {
  const { data, error } = await supabase
    .from("crew_members")
    .insert(formData)
    .select("id, name, role");

  return { data, error };
};

export const updateCrewmate = async (formData, memberId) => {
  const { data, error } = await supabase
    .from("crew_members")
    .update(formData)
    .eq("id", memberId)
    .select("id, name, role");

  return { data, error };
};

export default supabase;
