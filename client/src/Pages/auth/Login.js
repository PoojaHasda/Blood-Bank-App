import React from "react";
import Form from "../../Components/shared/form/form.js";
// import InputType from "../../Components/shared/form/inputType.js";
// import InputType from 

const Login = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-wallpaper">
          <img src="./assets/images/banner1.jpg" alt="loginpage" />
        </div>
        <div className="col-md-4 form-container">
            <Form FormTitle={'Login'} SubmitButton={'Login'} formType={'login'}/>
        </div>
      </div>
    </>
  );
};

export default Login;
