import React from "react";
import { useState } from "react";
import api from "../api/apiConfig";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/account/register", {
        name: name,
        email: email,
        password: password,
    })
    .then((res) => {
        if (res.data === "register user!") {
            console.log(res.data);
        }
    })
    .catch((error) => {
        console.error(error.response.data);
    });
    console.log(email + " " + password);
  };

  return (
    <div>
      <div className="flex flex-col h-screen justify-center items-center bg-blue-200">
        <div className="flex flex-col justify-center items-center w-1/2 h-2/3 bg-blue-100 rounded-lg ">
          <h1 className="text-3xl justify-center py-5">Register</h1>
          <form
            className="flex flex-col justify-center items-center gap-10 rounded-lg"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder=" Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[350px] h-14 rounded-lg "
            />
            <input
              type="text"
              placeholder=" Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[350px] h-14 rounded-lg "
            />
            <input
              type="password"
              placeholder=" Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[350px] h-14 rounded-lg "
            />
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 rounded-full w-[200px] h-[50px]"
          >
            Register
          </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Register;
