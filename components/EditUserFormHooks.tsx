//EditUserForm.tsx
import { Field, Form, Formik, useFormik } from "formik";
import React from "react";
import SaveButton from "./SaveButton";

const EditUserFormHooks = () => {
  //just a mock save function, let's pretend this calls the server
  const save = async () => {
    return {
      error: Math.random() > 0.5 ? "failed to save" : "",
    };
  };

  const formik = useFormik({
    onSubmit: async (values, helpers) => {
      const { error } = await save();

      if (!error) {
        helpers.resetForm({
          values,
        });
      }
    },
    initialValues: { name: "John Doe", email: "johndoe@gmail.com" },
  });

  return (
    <form
      className="flex flex-col gap-2 max-w-lg bg-base-200 shadow-md p-10"
      onSubmit={formik.submitForm}
    >
      <h1 className="text-xl"> Edit User</h1>

      <input
        name="name"
        type="text"
        placeholder="name"
        className="input input-bordered"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <input
        name="email"
        type="email"
        placeholder="email"
        className="input input-bordered"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <div className="flex gap-2 ">
        {/* check formik diry and reset form here */}
        <button
          type="button"
          className="btn btn-outline btn-error"
          disabled={!formik.dirty}
          onClick={() => formik.resetForm()}
        >
          Reset
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formik.dirty}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditUserFormHooks;
