"use client";

import { supabase } from "@/libs/supabase/client";

export default function HomePage() {
  const testConnection = async () => {
    const result = await supabase.from("test_connection").select("*");

    console.log(result);
  };
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">Technical Interview</h1>
      <button
        onClick={testConnection}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Test Database
      </button>
    </main>
  );
}
