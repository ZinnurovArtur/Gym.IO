import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./SignIn.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setTimeActive } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setTimeActive(true);
      navigate("/dashboard");
    } catch  {
      setError("Error");
    }
    setLoading(false);
  }
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="inline-flex items-start justify-start px-6 rounded-2xl"
        style={{ width: 910, height: 583 }}
      >
        <div
          className="flex space-x-6 items-start justify-start bg-white shadow-2xl rounded-2xl"
          style={{ width: 856, height: 583 }}
        >
          <div
            className="bg-gradient-signin bg-cover bg-center background-img-sign rounded-tl-xl rounded-bl-xl"
            style={{ width: 414, height: 583 }}
          />
          <div className="inline-flex flex-col space-y-6 items-center justify-center py-6 pl-8 pr-5">
            <div className="inline-flex items-center justify-center">
              <div className="w-19 h-full">
                <p className="text-3xl font-medium text-gray-400">GYM.</p>
              </div>
              <p className="text-3xl font-medium text-signin">IO</p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-2xl font-medium text-gray-600">Sign in </p>
              <p className="text-xl font-medium text-gray-400">
                Sign in to continue training :){" "}
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

            <form onSubmit={handleSubmit}>
              <div className="w-full">
                <label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    ref={emailRef}
                    className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Email address"
                  />
                </label>
              </div>

              <div className="w-full mt-4">
                <label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    ref={passwordRef}
                    placeholder="Password"
                    className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-start justify-start w-full mt-4 px-32 py-1.5 bg-signin shadow rounded-md hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300"
              >
                <p className="text-2xl font-medium text-white">Sign In</p>
              </button>
            </form>

            <div className="inline-flex items-center justify-center px-2.5">
              <p className="text-base font-medium text-gray-400">Or</p>
            </div>
            <div className="inline-flex space-x-2.5 items-center justify-center w-full h-12 py-2.5 bg-white shadow rounded-md ">
              <div className="flex items-center justify-center w-8 h-8 p-0.5 bg-white">
                <img className="flex-1 h-full rounded-lg image-google" />
              </div>
              <p className="w-3/4 h-7 text-xl font-medium text-black text-opacity-50">
                Continue with Google
              </p>
            </div>
            <div className="inline-flex items-start justify-start px-2.5">
              <p className="text-base font-medium text-gray-400">
                No account?{" "}
                <a
                  href="/signup"
                  className="text-signin hover underline"
                  bis_skin_checked="1"
                >
                  Create one
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
