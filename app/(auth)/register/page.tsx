import RegisterForm from "@/components/auth/RegisterForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Account | ByteSpace",
  description:
    "Create your ByteSpace account and start learning with access to our latest courses.",
};

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen  bg-[#003BE2]">
      <RegisterForm />
    </main>
  );
}
