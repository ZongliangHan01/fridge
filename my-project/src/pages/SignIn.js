import React from "react";
import { useState } from "react";
import api from "../api/apiConfig";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setAuth, setUid } = useAuth();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    api.post("/account/signin", {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        sessionStorage.setItem("uid", res.data);
        sessionStorage.setItem("auth", true);
        setUid(res.data);
        setAuth(true);
        navigate("/");
      }
     
    })
    .catch((error) => {
      console.error(error.response.data);
      setError(true);
      setErrorMessage(error.response.data);
    });
    console.log(email + " " + password);
  };

  return (
    <div>
      <div className="flex flex-col h-screen justify-center items-center bg-blue-200">
        <div className="flex flex-col justify-center items-center w-1/2 h-1/2 bg-blue-100 ">
          <h1 className="text-3xl justify-center py-5">Sign In</h1>
          <form
            className="flex flex-col justify-center items-center gap-10 rounded-lg"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
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
              className="w-[350px] h-14 rounded-lg"
            />
            {error && <div className="text-red-500 text-sm ">{errorMessage}</div>}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 rounded-full w-[200px] h-[50px]"
            >
              Sign In
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
};

export default SignIn;
