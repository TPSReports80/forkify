import React from "react";
import { ImSpinner } from "react-icons/im";
import { LoaderContainer } from "./LoaderElements";
const Loader = () => {
  return (
    <LoaderContainer>
      <ImSpinner className="loader-svg" />
    </LoaderContainer>
  );
};

export default Loader;
