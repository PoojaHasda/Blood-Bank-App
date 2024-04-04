import React from "react";
import Form from "../../Components/shared/form/form.js";

const Register = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-wallpaper">
          <img src="./assets/images/banner2.jpg" alt="Register img" />
        </div>
        <div className="col-md-4 form-container">
          <Form FormTitle={"Register"} SubmitButton={"Register"} formType={'register'} />
        </div>
      </div>
    </>
  );
};

export default Register;
