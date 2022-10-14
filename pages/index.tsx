import type { NextPage } from "next";
import { useState } from "react";
import LoginForm from "../components/EditUserForm";

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1 className="text-2xl">Formik</h1>
      <LoginForm />
    </div>
  );
};

export default Home;
