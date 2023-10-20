import { useState, useEffect } from "react";

const FileInput = ({ id, label, acceptTypes, handleFileChange, clearFileInput, hasValue, errorMessage }) => {
  return (
    <div className="flex flex-col gap-1 mb-1 h-20">
      <label htmlFor={id}>{label}</label>
      <div className="flex">
        <input className="pr-2" type="file" id={id} name={id} accept={acceptTypes} onChange={(event) => handleFileChange(event, acceptTypes)} />
        <button className={`ml-2 max-w-fit ml-auto bg-red-950 px-1 pt-1 rounded text-white ${hasValue ? "" : "hidden"}`} type="button" onClick={() => clearFileInput(id)}>
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
      {errorMessage && <div className="error-message w-full text-sm">{errorMessage}</div>}
    </div>
  );
};

const validateFile = (file, types, maxSizeInMB = 1.1) => {
  if (!file) return false;
  // Convert simplified file extensions to full MIME types
  const extensionToMime = {
    ".pdf": "application/pdf",
    ".doc": "application/msword",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".odt": "application/vnd.oasis.opendocument.text",
    ".rtf": "application/rtf",
    ".txt": "text/plain",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
  };

  const validTypes = types.split(", ").map((type) => extensionToMime[type.trim()] || type.trim());
  const validSize = file.size <= maxSizeInMB * 1024 * 1024; // Convert MB to Bytes

  return validTypes.includes(file.type) && validSize;
};

const DocumentUpload = ({ fileUploads, setFileUploads, setUploadError }) => {
  // Manage local errors for files
  const [errors, setErrors] = useState({
    "proof-of-address": null,
    "proof-passport": null,
    "proof-birth-certificate": null,
    "proof-visa": null,
    "proof-ni-number": null,
    "proof-share-code": null,
    "proof-student-term-time": null,
    "proof-indefinite-leave": null,
  });

  const [hasValue, setHasValue] = useState({
    "proof-of-address": false,
    "proof-passport": false,
    "proof-birth-certificate": false,
    "proof-visa": false,
    "proof-ni-number": false,
    "proof-share-code": false,
    "proof-student-term-time": false,
    "proof-indefinite-leave": false,
  });

  const allowedFileTypes = ".pdf, .jpg, .jpeg, .png";

  useEffect(() => {
    updateUploadErrorStatus();
  }, [fileUploads]);

  const handleFileChange = (event, types) => {
    const file = event.currentTarget.files[0];
    const inputName = event.currentTarget.name;
    let isValid = file && validateFile(file, types);

    setFileUploads((prev) => ({
      ...prev,
      [inputName]: file ? file : null,
    }));
    setErrors((prev) => ({
      ...prev,
      [inputName]: isValid ? null : "Invalid file type or file size too large!",
    }));
    // Set hasValue to true if a file is selected
    setHasValue((prev) => ({
      ...prev,
      [inputName]: file ? true : false,
    }));
  };

  const clearFileInput = (inputName) => {
    document.getElementById(inputName).value = ""; // Clear the input
    setFileUploads((prev) => ({
      ...prev,
      [inputName]: null, // Clear the file from the state
    }));
    setErrors((prev) => ({
      ...prev,
      [inputName]: null, // Clear any errors related to this file input
    }));
    setHasValue((prev) => ({
      ...prev,
      [inputName]: false,
    }));
  };

  const updateUploadErrorStatus = () => {
    let validFiles = true;

    Object.keys(fileUploads).forEach((key) => {
      const file = fileUploads[key];
      const isOptional = ["proof-visa", "proof-student-term-time"].includes(key);
      if (file) {
        // If a file is present
        if (!validateFile(file, allowedFileTypes)) {
          validFiles = false;
        }
      } else if (!isOptional) {
        // If no file and it's a required field
        validFiles = false;
      }
    });

    setUploadError(!validFiles);
  };

  // const updateUploadErrorStatus = () => {
  //   let validFiles = true;
  //   setUploadError(true);

  //   Object.keys(fileUploads).forEach((key) => {
  //     const file = fileUploads[key];
  //     const fileType = allowedFileTypes;
  //     if (!file || !validateFile(file, fileType)) validFiles = false;
  //   });

  //   if (validFiles) {
  //     setUploadError(false);
  //   }
  // };

  //Formik not playing ball so it goes bye bye.
  return (
    <div className="flex flex-col">
      <p className="my-3">Please upload the following documents. They should be in PDF, JPG, JPEG or PNG format and no larger than 1MB each.</p>
      <FileInput
        id="proof-of-address"
        label="Proof of Address*"
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-of-address"]}
        errorMessage={errors["proof-of-address"]}
      />

      <FileInput
        id="proof-passport"
        label="Proof of Passport*"
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-passport"]}
        errorMessage={errors["proof-passport"]}
      />

      <FileInput
        id="proof-birth-certificate"
        label="Proof of Birth Certificate*"
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-birth-certificate"]}
        errorMessage={errors["proof-birth-certificate"]}
      />

      <FileInput
        id="proof-ni-number"
        label="Proof of NI Number*"
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-ni-number"]}
        errorMessage={errors["proof-ni-number"]}
      />

      <FileInput
        id="proof-share-code"
        label="Proof of Share Code*"
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-share-code"]}
        errorMessage={errors["proof-share-code"]}
      />

      <FileInput
        id="proof-indefinite-leave"
        label="Proof Indefinite Leave*"
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-indefinite-leave"]}
        errorMessage={errors["proof-indefinite-leave"]}
      />
      <h3 className="font-semibold">Foreign Nationals</h3>
      <FileInput
        id="proof-visa"
        label="If you are a foreign national in the UK on a visa please provide proof of your visa."
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-visa"]}
        errorMessage={errors["proof-visa"]}
      />
      <h3 className="font-semibold mt-6">Students</h3>
      <FileInput
        id="proof-student-term-time"
        label="If you are a student please provide confirmation of attendance"
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-student-term-time"]}
        errorMessage={errors["proof-student-term-time"]}
      />
    </div>
  );
};

export default DocumentUpload;
