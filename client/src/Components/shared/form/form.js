import React, { useState } from "react";
import InputType from "./inputType.js";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService.js";

const Form = ({ formType, SubmitButton, FormTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [organisationName, setorganisationName] = useState("");
  const [hospitalName, sethospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login") {
            return handleLogin(e, email, password, role);
          } else if (formType === "register") {
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              organisationName,
              hospitalName,
              website,
              address,
              phone
            );
          }
        }}
      >
        <h1 className="text-center">{FormTitle}</h1>

        <hr />

        <div className="d-flex mb-3">
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label htmlFor="donarRadio" className="form-check-label">
              Donar
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organisationRadio" className="form-check-label">
              Organisation
            </label>
          </div>
        </div>
        {/* switch statement */}

        {(() => {
           // eslint-disable-next-line
          switch (true) {
           
            case formType === "login": {
              return (
                <>
                  <InputType
                    labeltext={"Email"}
                    labelFor={"forEmail"}
                    inputtype={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labeltext={"Password"}
                    labelFor={"forPassword"}
                    inputtype={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labeltext={"Name"}
                      labelFor={"forName"}
                      inputtype={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === "organisation" && (
                    <InputType
                      labeltext={"Organisation Name"}
                      labelFor={"forOrganisationName"}
                      inputtype={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => setorganisationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labeltext={"Hospital Name"}
                      labelFor={"forhospital"}
                      inputtype={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => sethospitalName(e.target.value)}
                    />
                  )}

                  <InputType
                    labeltext={"Email"}
                    labelFor={"forEmail"}
                    inputtype={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labeltext={"Password"}
                    labelFor={"forPassword"}
                    inputtype={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    labeltext={"website"}
                    labelFor={"forWebsite"}
                    inputtype={"text"}
                    name={"website"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labeltext={"Address"}
                    labelFor={"foraddress"}
                    inputtype={"text"}
                    name={"address"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labeltext={"Phone"}
                    labelFor={"forPhone"}
                    inputtype={"text"}
                    name={"phone"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex justify-content-between">
          {formType === "login" ? (
            <p>
              Not registered yet ? Register
              <Link to="/register"> Here !</Link>
            </p>
          ) : (
            <p>
              Already a user
              <Link to="/login"> Login Here !</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {SubmitButton}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
