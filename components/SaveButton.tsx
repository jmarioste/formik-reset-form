//SaveButton.tsx
import { useFormikContext } from "formik";
import React from "react";

const SaveButton = () => {
  //access formik context to check if the form is dirty.
  const { dirty } = useFormikContext();
  return (
    <>
      <button type="submit" className="btn btn-primary" disabled={!dirty}>
        Save
      </button>
    </>
  );
};

export default SaveButton;
