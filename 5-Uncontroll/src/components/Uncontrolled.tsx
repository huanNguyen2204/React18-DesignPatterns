/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState, ChangeEvent } from "react";

const Uncontrolled: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(`${firstName} ${lastName}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChangeFirstName}
        placeholder="input firstname"
        value={firstName}
      />

      <input
        type="text"
        onChange={handleChangeLastName}
        placeholder="input lastname"
        value={lastName}
      />
      <button>Submit</button>
    </form>
  );
};

export default Uncontrolled;
