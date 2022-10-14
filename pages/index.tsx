import type { NextPage } from "next";
import { useState } from "react";
import EditUserFormHooks from "../components/EditUserFormHooks";

const Home: NextPage = () => {
  return (
    <div className="container">
      <h1 className="text-2xl">Formik</h1>
      <EditUserFormHooks />
    </div>
  );
};

export default Home;
