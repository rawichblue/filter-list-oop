import React from "react";

interface CardResultProps {
  result: string[];
  description?: string;
}

export const CardResult = (data: CardResultProps): React.ReactElement => {
  const { result } = data;

  return (
    <div className="bg-gray-50 rounded-xl p-5 min-h-[120px] border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Results</h2>
      {result.length > 0 ? (
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          {result.map((item, index) => (
            <li key={index} className="text-indigo-700 font-medium">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 italic">No results found</p>
      )}
    </div>
  );
};
