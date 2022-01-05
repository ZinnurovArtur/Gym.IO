import React, { useRef, useState } from "react";
import "./SignIn.css";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(emailRef.current.value)

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }
  return (
<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="inline-flex items-start justify-start px-6 rounded-2xl" style={{width: 910, height: 583,}}>
        <div className="flex space-x-6 items-start justify-start bg-white shadow-2xl rounded-2xl" style={{width: 856, height: 583,}}>
            <div className="bg-gradient-signin bg-cover bg-center background-img-sign rounded-tl-xl rounded-bl-xl" style={{width: 414, height: 583,}}/>
            <div className="inline-flex flex-col space-y-6 items-center justify-center py-6 pl-8 pr-5">
                <div className="inline-flex items-center justify-center">
                    <div className="w-19 h-full">
                        <p className="text-3xl font-medium text-gray-400">GYM.</p>
                    </div>
                    <p className="text-3xl font-medium text-signin">IO</p>
                </div>
                <div className="flex flex-col items-start justify-start">
                    <p className="text-2xl font-medium text-gray-600">Sign in </p>
                    <p className="text-xl font-medium text-gray-400">Sign in to continue training :) </p>
                </div>
                
                <div className="w-full">
                    <div className="flex flex-col items-start justify-start w-full px-3 border rounded-lg border-gray-300">
                        <div className="inline-flex items-start justify-start w-full py-4">
                             <input type="text" name="email" ref={emailRef} placeholder = "Email Address" className="flex-1 text-base leading-normal text-gray-500"/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-14">
                    <div className="flex flex-col items-start justify-start w-full px-3 border rounded-lg border-gray-300">
                        <div className="inline-flex items-start justify-start w-full py-4">
                        <input type="password" name="password" ref={passwordRef} placeholder = "Password" className="flex-1 text-base leading-normal text-gray-500"/>
                        </div>
                    </div>

                </div>
                <button onSubmit={handleSubmit} className="inline-flex items-start justify-start w-full px-32 py-1.5 bg-signin shadow rounded-md">
                    <p className="text-2xl font-medium text-white">Sign In</p>
                </button>
                <div className="inline-flex items-center justify-center px-2.5">
                    <p className="text-base font-medium text-gray-400">Or</p>
                </div>
                <div className="inline-flex space-x-2.5 items-center justify-center w-full h-12 py-2.5 bg-white shadow rounded-md">
                    <div className="flex items-center justify-center w-8 h-8 p-0.5 bg-white">
                        <img className="flex-1 h-full rounded-lg" src="https://via.placeholder.com/29.39665412902832x29.396934509277344"/>
                    </div>
                    <p className="w-3/4 h-7 text-xl font-medium text-black text-opacity-50">Continue with Google</p>
                </div>
                <div className="inline-flex items-start justify-start px-2.5">
                    <p className="text-base font-medium text-gray-400">No account?   <a
                  href="/signup"
                  class="text-signin hover underline"
                  bis_skin_checked="1"
                >Create one</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
