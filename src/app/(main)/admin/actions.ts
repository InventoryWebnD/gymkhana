"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function loginAdmin(
  prevState: { error?: string } | null,
  formData: FormData
) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { error: "Please enter both username and password." };
  }

  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: "/admin",
    });
    return { error: undefined };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Invalid username or password. Please try again." };
    }
    // Next.js redirects by throwing a special redirect error, so re-throw if not AuthError
    throw error;
  }
}

export async function logoutAdmin() {
  await signOut({ redirectTo: "/admin/login" });
}
