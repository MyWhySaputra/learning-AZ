import { useState } from "react";
import Select from "react-select";
import { Product } from "../../models/autoselect";

export const ReactSelects = ({ data }: { data: Product[] }) => {
  const [query, setQuery] = useState("");

  // Fungsi untuk memformat label dengan teks yang ditebalkan
  const formatOptionLabel = (item: Product) => {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    const matchIndex = lowerCaseTitle.indexOf(lowerCaseQuery);

    if (matchIndex === -1 || !query) {
      return <span>{item.title}</span>;
    }

    const beforeMatch = item.title.slice(0, matchIndex);
    const matchText = item.title.slice(matchIndex, matchIndex + query.length);
    const afterMatch = item.title.slice(matchIndex + query.length);

    return (
      <span>
        {beforeMatch}
        <strong className="font-bold">{matchText}</strong>
        {afterMatch}
      </span>
    );
  };

  return (
    <div className="font-Parkinsans">
      <Select
        options={data}
        getOptionLabel={(e) => e.title} // Ensure title is used for filtering
        formatOptionLabel={formatOptionLabel} // Highlight matching text
        onInputChange={(value) => setQuery(value)} // Track user input
        onChange={(selectedOption) =>
          alert(`You selected: ${(selectedOption as Product).title}`)
        }
        placeholder="Search products..."
        className="basic-single"
        classNamePrefix="select"
        isClearable
      />
    </div>
  );
};
