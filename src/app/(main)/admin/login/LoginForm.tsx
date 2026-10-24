"use client";

import { useActionState, useState } from "react";
import { loginAdmin } from "../actions";
import { Lock, User, Eye, EyeOff, AlertCircle, ShieldCheck } from "lucide-react";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAdmin, null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md">
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-50 p-2 shadow-inner border border-neutral-200 mb-4">
            <img
              src="/icons/iitbbs.png"
              alt="Gymkhana Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 border border-blue-200 mb-2">
            <ShieldCheck size={13} />
            <span>Admin Portal</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 font-montserrat">
            STUDENTS&apos; GYMKHANA
          </h1>

          <p className="mt-1 text-xs sm:text-sm text-neutral-500">
            Sign in to access administrative settings and content controls
          </p>
        </div>

        {/* Error Alert */}
        {state?.error && (
          <div
            role="alert"
            className="mt-6 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-700 font-medium animate-in fade-in duration-200"
          >
            <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
            <span>{state.error}</span>
          </div>
        )}

        {/* Form */}
        <form action={formAction} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
            >
              Username
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
                <User size={17} />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                placeholder="Enter admin username"
                defaultValue=""
                disabled={isPending}
                className="w-full rounded-xl border border-neutral-300 bg-white py-2.5 pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-400 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/10 transition-colors disabled:opacity-60"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5"
            >
              Password
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
                <Lock size={17} />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                autoComplete="current-password"
                placeholder="Enter admin password"
                defaultValue=""
                disabled={isPending}
                className="w-full rounded-xl border border-neutral-300 bg-white py-2.5 pl-10 pr-10 text-sm text-neutral-900 placeholder-neutral-400 focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700/10 transition-colors disabled:opacity-60"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-neutral-400 hover:text-neutral-700 focus:outline-none cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full mt-2 rounded-xl bg-blue-700 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {isPending ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                <span>Authenticating...</span>
              </>
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-neutral-100 text-center text-xs text-neutral-400">
          <p>Indian Institute of Technology Bhubaneswar</p>
        </div>
      </div>
    </div>
  );
}
