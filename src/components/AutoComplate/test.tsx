import { useState } from "react";
import Select, { StylesConfig } from "react-select";

// Tipe data untuk produk
interface Product {
  id: number;
  title: string;
}

export const Test = ({ data }: { data: Product[] }) => {
  const [query, setQuery] = useState("");

  const formatOptionLabel = (item: Product) => {
    const title = item.title;
    const lowerCaseTitle = title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    const matchIndex = lowerCaseTitle.indexOf(lowerCaseQuery);

    if (matchIndex === -1 || !query) {
      return <span>{title}</span>;
    }

    const beforeMatch = title.slice(0, matchIndex);
    const matchText = title.slice(matchIndex, matchIndex + query.length);
    const afterMatch = title.slice(matchIndex + query.length);

    return (
      <span>
        {beforeMatch}
        <strong style={{ fontWeight: "bold" }}>{matchText}</strong>
        {afterMatch}
      </span>
    );
  };

  const customStyles: StylesConfig<Product, false> = {
    control: (provided) => ({
      ...provided,
      borderColor: "#ccc",
      "&:hover": { borderColor: "#999" },
      boxShadow: "none",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#333",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f0f0f0" : "white",
      color: state.isSelected ? "black" : "#333",
      "&:hover": { backgroundColor: "#f5f5f5" },
    }),
  };

  const handleInputChange = (inputValue: string) => {
    setQuery(inputValue);
  };

  // Filter hanya berdasarkan huruf depan dari kata pertama
  const filteredOptions = data.filter((item) => {
    const firstWord = item.title.split(" ")[0]; // Ambil kata pertama
    const lowerCaseQuery = query.toLowerCase();
    return firstWord.toLowerCase().startsWith(lowerCaseQuery);
  });

  return (
    <div>
      <Select
        options={filteredOptions}
        getOptionLabel={(item) => item.title}
        formatOptionLabel={formatOptionLabel}
        onInputChange={handleInputChange}
        styles={customStyles}
        placeholder="Search products..."
        isClearable
      />
    </div>
  );
};
