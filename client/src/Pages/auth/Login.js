import React from "react";
import Form from "../../Components/shared/form/form.js";
import { useSelector } from "react-redux";

import Spinner from "./../../Components/shared/Spinner.js";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-wallpaper">
            <img src="./assets/images/banner1.jpg" alt="loginimage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              FormTitle={"Login"}
              SubmitButton={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
