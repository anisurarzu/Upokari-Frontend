import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        firstName,
        lastName,
        username,
        email,
        password,
      });
      if (response?.status === 201) {
        toast.success("Successfully Registered!");
      } else {
        toast.error(response.data);
      }

      // Handle successful registration (e.g., show success message)
    } catch (error) {
      toast.error(error.response.data?.message);
      console.log("err", error?.data?.message);

      // Handle registration error (e.g., display error message to user)
    }
  };
  return (
    <div>
      {/* <Navbar /> */}
      <div class="min-h-screen flex items-center justify-center bg-blue-50">
        <div class="!w-[330px] w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 class="text-3xl font-semibold text-center text-gray-500 mt-8 mb-6">
            Registraion
          </h1>
          <form onSubmit={handleRegister}>
            <div class="mb-4">
              <label for="nombre" class="block mb-2 text-xl text-gray-600">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <label for="apellido" class="block mb-2 text-xl text-gray-600">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                class="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <label for="apellido" class="block mb-2 text-xl text-gray-600">
                User Name
              </label>
              <input
                type="text"
                id="userName"
                name="userName"
                class="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block mb-2 text-xl text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <label for="password" class="block mb-2 text-xl text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              class="w-36 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-4 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">
              Registration
            </button>
          </form>
          <div class="text-center">
            <p class="text-2xl">
              Already have an account?
              <Link to="/login" class="text-cyan-600">
                Log In
              </Link>
            </p>
          </div>
          <p class="text-xs text-gray-600 text-center mt-8">
            &copy; 2023 WCS LAT
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
