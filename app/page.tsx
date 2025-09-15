"use client";

import { useState } from "react";
import { CardResult } from "./components/cardResult";
import { FilterSearch } from "@/utils/FilterSearch";
import { QuerySplit } from "@/utils/QuerySplit";

export default function Index() {
  // state for input
  const [query, setQuery] = useState("");
  // state for result
  const [result, setResult] = useState<string[]>([]);

  // instance original list
  const filter = new FilterSearch(["1101", "1102", "1103"]);

  // function on click
  const handleSearch = () => {
    const keywords = QuerySplit.parse(query);
    setResult(filter.filter(keywords));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 shadow-2xl rounded-2xl w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Example Filter List
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Please enter keyword (1101 1102 1103)"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow hover:bg-indigo-700 transition cursor-pointer"
          >
            Search
          </button>
        </div>

        <CardResult result={result} />
      </div>
    </main>
  );
}
