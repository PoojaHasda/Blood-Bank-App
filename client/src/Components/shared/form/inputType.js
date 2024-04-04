import React from "react";
const InputType = ({
  labeltext,
  labelFor,
  inputtype,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="mb-1">
        <label htmlFor={labelFor} className="form-label">
          {labeltext}
        </label>
        <input
          type={inputtype}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputType;
