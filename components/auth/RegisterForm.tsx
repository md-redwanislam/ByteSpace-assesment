"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import AuthArtwork from "./AuthArtWork";
import AuthLogo from "./AuthLogo";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!formData.password) {
      setError("Please enter your password.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    /*
      TODO:
      Connect this to your backend.

      Example:

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    */

    console.log("Registration data:", formData);
  };

  return (
    <div className="relative min-h-screen bg-[#003BE2]">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="auth-grid absolute inset-0" />
      </div>

      {/* Logo */}
      <AuthLogo />

      {/* Left content */}
      <div className="absolute left-[8.47%] top-[11.72%] w-[475px]">
        <h1 className="font-[var(--font-poppins)] text-[20px] font-bold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]">
          Sign up and come in
        </h1>

        <p className="mt-4 font-sans text-[18px] font-normal leading-[160%] text-[#F5F5F6]">
          The registration process is straightforward, uncomplicated, and
          efficient, allowing users to sign up quickly, easily, and at no cost.
        </p>
      </div>

      {/* Decorative course cards */}
      <AuthArtwork />

      {/* Register card */}
      <section className="absolute left-[51.46%] top-[11.72%] w-[579px] rounded-[24px] bg-white px-[63px] py-[61px]">
        <div className="flex flex-col items-center">
          <div className="w-full">
            <p className="font-sans text-[18px] font-normal leading-[160%] text-[#003BE2]">
              Create an Account
            </p>

            <h2 className="mt-0 font-[var(--font-poppins)] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
              Welcome to
              <br />
              ByteSpace
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-[40px] flex w-full flex-col gap-6"
          >
            <InputField
              label="Full Name"
              name="name"
              type="text"
              placeholder="Jamie Davis"
              value={formData.name}
              onChange={handleChange}
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              placeholder="designer@example.com"
              value={formData.email}
              onChange={handleChange}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
            />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-full bg-[#D4FB20] px-6 py-3 font-sans text-[18px] font-medium leading-[120%] text-[#242528] transition-opacity hover:opacity-90"
              >
                Continue
              </button>
            </div>
          </form>

          <div className="mt-[122px] flex items-center gap-1 font-sans text-[16px] leading-[160%]">
            <span className="text-[#4B4C53]">Already have an account?</span>

            <Link href="/login" className="text-[#003BE2] hover:underline">
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

type InputFieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="font-sans text-[14px] font-medium leading-[120%] text-[#242528]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="box-border h-[52px] w-full rounded-[12px] border border-[#E5E6E8] bg-white px-6 py-3 font-sans text-[18px] font-normal leading-[160%] text-[#242528] outline-none placeholder:text-[#82868E] focus:border-[#003BE2]"
      />
    </div>
  );
}
