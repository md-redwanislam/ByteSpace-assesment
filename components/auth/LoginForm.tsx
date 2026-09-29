"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import AuthArtwork from "./AuthArtWork";
import AuthLogo from "./AuthLogo";

export default function LoginForm() {
  const [formData, setFormData] = useState({
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

    if (!formData.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!formData.password) {
      setError("Please enter your password.");
      return;
    }

    /*
      TODO:
      Connect this to your backend.

      Example:

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    */

    console.log("Login data:", formData);
  };

  return (
    <div className="relative min-h-screen bg-[#003BE2]">
      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div className="auth-grid absolute inset-0" />
      </div>

      <AuthLogo />

      {/* Left content */}
      <div className="absolute left-[8.47%] top-[11.72%] w-[475px]">
        <h1 className="font-[var(--font-poppins)] text-[20px] font-bold leading-[120%] text-[#F5F5F6] ">
          Sign in with ease
        </h1>

        <p className="mt-4 font-sans text-[18px] leading-[160%] text-[#F5F5F6]">
          Experience a seamless and efficient sign-in process that grants you
          instant access to a world of knowledge.
        </p>
      </div>

      <AuthArtwork />

      {/* Login card */}
      <section className="absolute left-[51.46%] top-[11.72%] w-[579px] rounded-[24px] bg-white px-[63px] py-[61px]">
        <div className="w-full">
          <p className="font-sans text-[18px] leading-[160%] text-[#003BE2]">
            Sign In
          </p>

          <h2 className="mt-0 font-[var(--font-poppins)] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
            Login to
            <br />
            ByteSpace
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-[40px] flex w-full flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-sans text-[14px] font-medium text-[#242528]"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="designer@example.com"
              value={formData.email}
              onChange={handleChange}
              className="h-[52px] rounded-[12px] border border-[#E5E6E8] px-6 text-[18px] outline-none placeholder:text-[#82868E] focus:border-[#003BE2]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="font-sans text-[14px] font-medium text-[#242528]"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="h-[52px] rounded-[12px] border border-[#E5E6E8] px-6 text-[18px] outline-none placeholder:text-[#82868E] focus:border-[#003BE2]"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-full bg-[#D4FB20] px-6 py-3 text-[18px] font-medium text-[#242528] hover:opacity-90"
            >
              Continue
            </button>
          </div>
        </form>
        {/* Divider */}
        <div className="mt-[77px] flex items-center gap-3">
          <div className="h-px flex-1 bg-[#E5E6E8]" />

          <span className="font-sans text-[16px] leading-[160%] text-[#82868E]">
            or
          </span>

          <div className="h-px flex-1 bg-[#E5E6E8]" />
        </div>

        {/* Social login */}
        <div className="mt-[24px] flex justify-center gap-2">
          {/* Facebook */}
          <button
            type="button"
            aria-label="Continue with Facebook"
            className="
            flex
            size-[46px]
            items-center
            justify-center
            rounded-[12px]
            border
            border-[#E5E6E8]
            bg-white
            transition-colors
            hover:bg-[#F5F5F6]
          "
          >
            <span className="text-[24px] font-bold text-black">f</span>
          </button>

          {/* Google */}
          <button
            type="button"
            aria-label="Continue with Google"
            className="
            flex
            size-[46px]
            items-center
            justify-center
            rounded-[12px]
            border
            border-[#E5E6E8]
            bg-white
            transition-colors
            hover:bg-[#F5F5F6]
          "
          >
            <span className="text-[24px] font-semibold text-black">G</span>
          </button>
        </div>
        <div className="mt-[122px] flex justify-center gap-1 text-[16px] leading-[160%]">
          <span className="text-[#4B4C53]">New user?</span>

          <Link href="/register" className="text-[#003BE2] hover:underline">
            Create an account
          </Link>
        </div>
      </section>
    </div>
  );
}
