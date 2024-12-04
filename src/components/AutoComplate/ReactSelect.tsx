import { useState } from "react";
import Select, { StylesConfig } from "react-select";
import { Product } from "../../models/autoselect";

export const ReactSelects = ({ data }: { data: Product[] }) => {
  const [query, setQuery] = useState("");

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

  // Kustomisasi gaya di react-select
  const customStyles: StylesConfig<Product, false> = {
    control: (provided) => ({
      ...provided,
      borderColor: "#ccc", // Mengubah border kontrol
      "&:hover": {
        borderColor: "#999", // Mengubah border saat hover
      },
      boxShadow: "none", // Menghilangkan shadow biru
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#333", // Warna teks produk yang dipilih
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white", // Ubah warna background dropdown
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f0f0f0" : "white", // Warna latar belakang opsi yang dipilih
      color: state.isSelected ? "black" : "#333", // Warna teks saat opsi dipilih
      "&:hover": {
        backgroundColor: "#f5f5f5", // Hover state
      },
    }),
  };

  return (
    <div className="font-Parkinsans">
      <Select
        options={data}
        getOptionLabel={(e) => e.title}
        formatOptionLabel={formatOptionLabel}
        onInputChange={(value) => setQuery(value)}
        styles={customStyles} // Terapkan custom styles
        placeholder="Search products..."
        className="basic-single"
        classNamePrefix="select"
        isClearable
      />
    </div>
  );
};
