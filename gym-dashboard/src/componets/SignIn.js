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
    console.log(emailRef)

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
    <section class="w-full px-8 py-16 bg-gray-100 xl:px-8">
      <div class="max-w-5xl mx-auto" bis_skin_checked="1">
        <div
          class="flex flex-col items-center md:flex-row"
          bis_skin_checked="1"
        >
          <div class="w-full space-y-5 md:w-3/5 md:pr-16" bis_skin_checked="1">
            <p class="font-medium text-blue-500 uppercase">
              Building Businesses
            </p>
            <h2 class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
              Changing The Way People Do Business.
            </h2>
            <p class="text-xl text-gray-600 md:pr-16">
              Learn how to engage with your visitors and teach them about your
              mission. We're revolutionizing the way customers and businesses
              interact.
            </p>
          </div>

          <div class="w-full mt-16 md:mt-0 md:w-2/5" bis_skin_checked="1">
            <div
              class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7"
              bis_skin_checked="1"
            >
              <h3 class="mb-6 text-2xl font-medium text-center">
                Sign in to your Account
              </h3>
              <input
                type="text"
                name="email"
                ref={emailRef}
                class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Email address"
              />
              <input
                type="password"
                name="password"
                ref={passwordRef}
                class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Password"
              />
              <div class="block" bis_skin_checked="1">
                <button
                  onSubmit={handleSubmit}
                  class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"
                >
                  Log Me In
                </button>
              </div>
              <p class="w-full mt-4 text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  class="text-blue-500 underline"
                  bis_skin_checked="1"
                >
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
