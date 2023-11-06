/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from "react";

const Controlled = () => {
  const [values, setValues] = useState({
    firstName: "Huan",
    lastName: "Nguyen",
  });

  const handleChange = (type: string, e: ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case "firstName":
        setValues({
          ...values,
          lastName: e.target.value,
        });
        break;

      case "lastName":
        setValues({
          ...values,
          lastName: e.target.value,
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(`${values.firstName} ${values.lastName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("firstName", e)}
      />{" "}
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("lastName", e)}
      />
      <button>Submit</button>
    </form>
  );
};

export default Controlled;
