"use client";
import { Suspense } from "react";
import UserAuthForm from "@/features/auth/components/user-auth-form";

export default function ClientWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserAuthForm />
    </Suspense>
  );
}
