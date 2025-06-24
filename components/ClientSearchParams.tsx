// components/ClientSearchParams.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function ClientSearchParams() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // example usage

  return <div>Search token: {token}</div>;
}
