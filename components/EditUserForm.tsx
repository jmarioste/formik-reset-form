//EditUserForm.tsx
import { Field, Form, Formik } from "formik";
import React from "react";
import SaveButton from "./SaveButton";

const EditUserForm = () => {
  //just a mock save function, let's pretend this calls the server
  const save = async () => {
    return {
      error: Math.random() > 0.5 ? "failed to save" : "",
    };
  };
  return (
    <Formik
      onSubmit={async (values, helpers) => {
        const { error } = await save();

        // reset the form if it is saved successfully
        //now the initial state will be the values submitted.
        if (!error) {
          helpers.resetForm({
            values,
          });
        }
      }}
      initialValues={{ name: "John Doe", email: "johndoe@gmail.com" }}
    >
      {/* we can use render props to get a hold of the formik context */}
      {({ dirty, resetForm }) => {
        return (
          <Form className="flex flex-col gap-2 max-w-lg bg-base-200 shadow-md p-10">
            <h1 className="text-xl"> Edit User</h1>

            <Field
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
            />
            <Field
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
            />
            <div className="flex gap-2 ">
              <button
                className="btn btn-outline btn-error"
                disabled={!dirty}
                onClick={() => resetForm()}
              >
                Reset
              </button>
              <SaveButton />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EditUserForm;
