import { useState, useEffect } from "react";

const FileInput = ({ id, label, labelExample = "", acceptTypes, handleFileChange, clearFileInput, hasValue, errorMessage }) => {
  return (
    <div className="flex flex-col gap-1 mb-1">
      <label htmlFor={id}>
        <b>{label}</b> {labelExample}
      </label>
      <div className="h-14">
        <div className="flex">
          <input className="pr-2" type="file" id={id} name={id} accept={acceptTypes} onChange={(event) => handleFileChange(event, acceptTypes)} />
          <button className={`ml-2 max-w-fit ml-auto bg-red-950 px-1 pt-1 rounded text-white ${hasValue ? "" : "hidden"}`} type="button" onClick={() => clearFileInput(id)}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
        {errorMessage && <div className="error-message w-full text-sm">{errorMessage}</div>}
      </div>
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
    cv: null,
    "proof-of-address": null,
    "proof-id": null,
    "proof-ni-number": null,
    "proof-share-code": null,
  });

  const [hasValue, setHasValue] = useState({
    cv: false,
    "proof-of-address": false,
    "proof-id": false,
    "proof-ni-number": false,
    "proof-share-code": false,
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
      const isOptional = ["proof-share-code", "cv"].includes(key);
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

  //Formik not playing ball so it goes bye bye.
  return (
    <div className="flex flex-col">
      <p className="my-3">Please upload the following documents. They should be in PDF, JPG, JPEG or PNG format and no larger than 1MB each.</p>

      <h3 className="font-bold text-xl mb-2">All Candidates</h3>

      <FileInput
        id="proof-of-address"
        label="Proof of Address*"
        labelExample="(eg. Utility Bill or Bank Statement from the last 3 month, Council Tax Bill for current year.))"
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-of-address"]}
        errorMessage={errors["proof-of-address"]}
      />

      <FileInput
        id="proof-id"
        label="Proof of Identification*"
        labelExample="(examples include but not limited to: passport, full birth certificate, and BRP cards)"
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-id"]}
        errorMessage={errors["proof-id"]}
      />

      <FileInput
        id="proof-ni-number"
        label="Proof of NI Number*"
        labelExample="(eg. NI Card, P45, P60, HMRC Letter, Payslip with NI Number on)"
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-ni-number"]}
        errorMessage={errors["proof-ni-number"]}
      />

      <FileInput
        id="cv"
        label="CV"
        labelExample=""
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["cv"]}
        errorMessage={errors["cv"]}
      />

      <h3 className="font-bold text-xl m-2">Foreign Nationals</h3>
      <p className="my-3">
        As a foreign national, please review and upload the necessary documents that correspond to your specific circumstances. We appreciate your understanding in helping us ensure all requirements
        are met.
      </p>
      <FileInput
        id="proof-share-code"
        label="Proof Share Code,"
        labelExample="if you have a foreign passport, BRP, Visa."
        acceptTypes={allowedFileTypes}
        handleFileChange={handleFileChange}
        clearFileInput={clearFileInput}
        hasValue={hasValue["proof-share-code"]}
        errorMessage={errors["proof-share-code"]}
      />
    </div>
  );
};

export default DocumentUpload;
