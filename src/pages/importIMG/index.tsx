import { useState, useRef, useEffect } from "react";

export const ImportIMG = () => {
  const [files, setFiles] = useState([]);
  const inputFileRef = useRef(null);

  useEffect(() => {
    const handlePaste = async (event) => {
      const clipboardItems = event.clipboardData.items;
      for (let i = 0; i < clipboardItems.length; i++) {
        if (clipboardItems[i].type.startsWith("image")) {
          const file = clipboardItems[i].getAsFile();
          setFiles((prevFiles) => [...prevFiles, file]);
          uploadImage(file);
        }
      }
    };

    document.addEventListener("paste", handlePaste);

    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    // Optionally upload the image here
  };

  const uploadImage = (file) => {
    // Implement your file upload logic here (e.g., using Axios)
    console.log("Uploading image:", file);
  };

  return (
    <div className="w-full h-screen items-center justify-center flex flex-col">

      <div className="image-upload">
        <input
          type="file"
          ref={inputFileRef}
          onChange={handleFileChange}
          multiple
          style={{ display: "none" }}
        />
        {/* Optionally, add a button to trigger file selection */}
        <button onClick={() => inputFileRef.current.click()}>
          Upload Image
        </button>

        <div className="preview">
          {files.map((file, index) => (
            <div>
              <p>{file.name}</p>
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`uploaded preview ${index}`}
                style={{ maxWidth: "100px", margin: "5px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
