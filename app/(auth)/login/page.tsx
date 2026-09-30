import LoginForm from "@/components/auth/LoginForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | ByteSpace",
  description:
    "Sign in to your ByteSpace account to access your courses and continue learning.",
};

export default function LoginPage() {
  return (
    <main className="relative min-h-screen  bg-[#003BE2]">
      <LoginForm />
    </main>
  );
}
