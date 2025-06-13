"use server";

import { revalidateTag } from "next/cache";
import { LOGIN_URL } from "./api-urls";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const signIn = async (requestData: {
  username: string;
  password: string;
}) => {
  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, message: data.message || "Login failed" };
    }

    revalidateTag(data.token);

    const cookieStore = await cookies();
    cookieStore.set("loginToken", data.token, {
      secure: true,
      httpOnly: true,
      sameSite: "none",
      maxAge: 60 * 60 * 24 * 15, // 15 days
    });

    return {
      success: true,
      token: data.token,
      message: data.message,
    };
  } catch (error: unknown) {
    let errorMessage = "An error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage,
      error: errorMessage,
    };
  }
};

export const signOut = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.set("loginToken", "");
    cookieStore.delete("loginToken");
  } catch (error) {
    console.error("Error during sign out:", error);
  }

  redirect("/");
};
