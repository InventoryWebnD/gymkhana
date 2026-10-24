import { redirect } from "next/navigation";
import { auth } from "@/auth";
import LoginForm from "./LoginForm";

export const instant = false;

export default async function AdminLoginPage() {
  const session = await auth();

  if (session) {
    redirect("/admin");
  }

  return (
    <main className="min-h-screen w-full bg-neutral-50 flex items-center justify-center px-4 py-24 sm:py-32">
      <LoginForm />
    </main>
  );
}
