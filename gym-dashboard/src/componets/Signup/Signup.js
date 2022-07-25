import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { auth } from "../../firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setTimeActive } = useAuth();
 

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Password not matched");
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              setTimeActive(true);
              navigate("/dashboard");
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => setError(err.message));
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="inline-flex items-start justify-start px-6 rounded-2xl"
        style={{ width: 910, height: 583 }}
      >
        <div
          className="flex space-x-6 items-start justify-start bg-white shadow-2xl rounded-2xl"
          style={{ width: 853, height: 625 }}
        >
          <div
            className="bg-gradient-signin bg-cover bg-center background-img-sign rounded-tl-xl rounded-bl-xl"
            style={{ width: 414, height: 625 }}
          />
          <div className="inline-flex flex-col space-y-6 items-center justify-center py-6 pl-8 pr-5">
            <div className="inline-flex items-center justify-center">
              <div className="w-19 h-full">
                <p className="text-3xl font-medium text-gray-400">GYM.</p>
              </div>
              <p className="text-3xl font-medium text-signin">IO</p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-2xl font-medium text-gray-600">Sign Up </p>
              <p className="text-xl font-medium text-gray-400">
                Sign up to become memeber:){" "}
              </p>
            </div>
            {error && (
              <div
                className=" px-3 py-2 mb-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert"
              >
                <span className="font-medium">{error}</span> Change a few things
                up and try submitting again.
              </div>
            )}

            <form onSubmit={register}>
              <div className="w-full">
                <label>
                  <input
                    type="text"
                    name="fullname"
                    className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Full Name"
                  />
                </label>
              </div>
              <div className="w-full mt-4">
                <label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Email Address"
                  />
                </label>
              </div>

              <div className="w-full mt-4">
                <label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    autoComplete="current-password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  />
                </label>
              </div>

              <div className="w-full mt-4">
                <label>
                  <input
                    type="password"
                    name="password"
                    value={confirmPassword}
                    autoComplete="current-password"
                    placeholder="Repeat password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-start justify-start w-full mt-4 px-32 py-1.5 bg-signin shadow rounded-md hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
              >
                <p className="text-2xl font-medium text-white">Sign Up</p>
              </button>
            </form>

            <div className="inline-flex items-start justify-start px-2.5">
              <p className="text-base font-medium text-gray-400">
                Already memeber?{" "}
                <a
                  href="/signin"
                  className="text-signin hover underline"
                  bis_skin_checked="1"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
