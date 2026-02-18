import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data: cities, error } = await supabase
    .from("cities")
    .select("*")
    .eq("is_active", true)
    .order("name");

  if (error) {
    console.error(error);
    return <div>Error loading cities</div>;
  }

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Available Cities
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {cities?.map((city) => (
          <div
            key={city.id}
            className="p-4 border rounded-xl hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">
              {city.name}
            </h2>
            <p className="text-sm text-gray-500">
              {city.state}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
