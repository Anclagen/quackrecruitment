import { useState, useEffect } from "react";
import propsTypes from "prop-types";

const validateFile = (file, types, maxSizeInMB = 4) => {
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
    "cv-upload": null,
    "id-upload": null,
    "proof-of-national-insurance-number": null,
    "proof-of-address": null,
    "additional-information": null,
  });

  const [hasValue, setHasValue] = useState({
    "cv-upload": false,
    "id-upload": false,
    "proof-of-national-insurance-number": false,
    "proof-of-address": false,
    "additional-information": false,
  });

  const cvFileTypes = ".pdf, .doc, .docx, .odt, .rtf, .txt";
  const OtherFileTypes = ".pdf, .doc, .docx, .odt, .rtf, .txt, .jpg, .jpeg, .png";

  useEffect(() => {
    updateUploadErrorStatus();
  }, [fileUploads]);

  const handleFileChange = (event, types) => {
    const file = event.currentTarget.files[0];
    const inputName = event.currentTarget.name;
    let isValid = file && validateFile(file, types);

    setFileUploads((prev) => ({
      ...prev,
      [inputName]: isValid ? file : null,
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
    setUploadError(true);
    if (!fileUploads["cv-upload"] || !validateFile(fileUploads["cv-upload"], cvFileTypes)) {
      validFiles = false;
    }
    if (!fileUploads["id-upload"] || !validateFile(fileUploads["id-upload"], OtherFileTypes)) {
      validFiles = false;
    }
    if (fileUploads["proof-of-national-insurance-number"] && !validateFile(fileUploads["proof-of-national-insurance-number"], OtherFileTypes)) {
      validFiles = false;
    }
    if (fileUploads["proof-of-address"] && !validateFile(fileUploads["proof-of-address"], OtherFileTypes)) {
      validFiles = false;
    }
    if (fileUploads["additional-information"] && !validateFile(fileUploads["additional-information"], OtherFileTypes)) {
      validFiles = false;
    }
    if (validFiles) {
      setUploadError(false);
    }
  };

  //Formik not playing ball so it goes bye bye.
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1 mb-1 h-20">
        <label htmlFor="cv-upload">CV Upload*</label>
        <div className="flex">
          <input className="pr-2" type="file" id="cv-upload" name="cv-upload" accept={cvFileTypes} onChange={(event) => handleFileChange(event, cvFileTypes)} />
          <button className={`ml-2 max-w-fit ml-auto bg-red-950 px-1 pt-1 rounded text-white ${hasValue["cv-upload"] ? "" : "hidden"}`} type="button" onClick={() => clearFileInput("cv-upload")}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
        {errors["cv-upload"] && <div className="error-message w-full text-sm">{errors["cv-upload"]}</div>}
      </div>

      <div className="flex flex-col gap-1 mb-1 h-20">
        <label htmlFor="id-upload">ID Upload*</label>
        <div className="flex">
          <input className="pr-2" type="file" id="id-upload" name="id-upload" accept={OtherFileTypes} onChange={(event) => handleFileChange(event, OtherFileTypes)} />
          <button className={`ml-2 max-w-fit ml-auto bg-red-950 px-1 pt-1 rounded text-white ${hasValue["id-upload"] ? "" : "hidden"}`} type="button" onClick={() => clearFileInput("id-upload")}>
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
        {errors["id-upload"] && <div className="error-message w-full text-sm">{errors["id-upload"]}</div>}
      </div>

      <div className="flex flex-col gap-1 mb-1 h-20">
        <label htmlFor="proof-of-national-insurance-number">Proof of National Insurance Number</label>
        <div className="flex">
          <input
            className="pr-2"
            type="file"
            id="proof-of-national-insurance-number"
            name="proof-of-national-insurance-number"
            accept={OtherFileTypes}
            onChange={(event) => handleFileChange(event, OtherFileTypes)}
          />
          <button
            className={`ml-2 max-w-fit ml-auto bg-red-950 px-1 pt-1 rounded text-white ${hasValue["proof-of-national-insurance-number"] ? "" : "hidden"}`}
            type="button"
            onClick={() => clearFileInput("proof-of-national-insurance-number")}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
        {errors["proof-of-national-insurance-number"] && <div className="error-message w-full text-sm">{errors["proof-of-national-insurance-number"]}</div>}
      </div>

      <div className="flex flex-col gap-1 mb-1 h-20">
        <label htmlFor="proof-of-address">Proof of Address</label>
        <div className="flex">
          <input className="pr-2" type="file" id="proof-of-address" name="proof-of-address" accept={OtherFileTypes} onChange={(event) => handleFileChange(event, OtherFileTypes)} />
          <button
            className={`ml-2 max-w-fit ml-auto bg-red-950 px-1 pt-1 rounded text-white ${hasValue["proof-of-address"] ? "" : "hidden"}`}
            type="button"
            onClick={() => clearFileInput("proof-of-address")}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
        {errors["proof-of-address"] && <div className="error-message w-full text-sm">{errors["proof-of-address"]}</div>}
      </div>

      <div className="flex flex-col gap-1 mb-1 h-20">
        <label htmlFor="additional-information">Additional Information</label>
        <div className="flex">
          <input className="pr-2" type="file" id="additional-information" name="additional-information" accept={OtherFileTypes} onChange={(event) => handleFileChange(event, OtherFileTypes)} />
          <button
            className={`ml-2 max-w-fit ml-auto bg-red-950 px-1 pt-1 rounded text-white ${hasValue["additional-information"] ? "" : "hidden"}`}
            type="button"
            onClick={() => clearFileInput("additional-information")}
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
        {errors["additional-information"] && <div className="error-message w-full text-sm">{errors["additional-information"]}</div>}
      </div>
    </div>
  );
};

DocumentUpload.propTypes = {
  fileUploads: propsTypes.objectOf(propsTypes.instanceOf(File)),
  setFileUploads: propsTypes.func.isRequired,
  setUploadError: propsTypes.func.isRequired,
};

export default DocumentUpload;
