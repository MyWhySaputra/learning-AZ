import { useEffect, useState } from "react";
import { Product } from "../../models/autoselect";

export const NoLibrary = ({ data }: { data: Product[] }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  useEffect(() => {
    if (query) {
      setFilteredData(
        data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [query, data]);

  const highlightMatch = (text: string, query: string) => {
    const lowerCaseText = text.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    const matchIndex = lowerCaseText.indexOf(lowerCaseQuery);

    if (matchIndex === -1) {
      return text;
    }

    const beforeMatch = text.slice(0, matchIndex);
    const matchText = text.slice(matchIndex, matchIndex + query.length);
    const afterMatch = text.slice(matchIndex + query.length);

    return (
      <>
        {beforeMatch}
        <strong className="font-bold">{matchText}</strong>
        {afterMatch}
      </>
    );
  };

  const handleSelectProduct = (title: string) => {
    setQuery(title); // Set the selected product's title in the input
    setFilteredData([]); // Optionally clear the suggestions
  };

  return (
    <div className="font-Parkinsans relative">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <ul className="bg-white max-h-60 overflow-y-auto">
        {filteredData.map((item) => (
          <li
            key={item.id}
            className="p-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleSelectProduct(item.title)} // Handle product selection
          >
            {highlightMatch(item.title, query)}
          </li>
        ))}
      </ul>
    </div>
  );
};
