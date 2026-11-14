import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { logoutAdmin } from "./actions";
import Link from "next/link";
import {
  ShieldCheck,
  LogOut,
  Users,
  Building2,
  Calendar,
  Layers,
  Settings,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import societiesList from "@/data/soc.json";

export const instant = false;

export default async function AdminDashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/admin/login");
  }

  const technicalCount = societiesList.filter(
    (s) => s.council === "Science & Tech"
  ).length;
  const culturalCount = societiesList.filter(
    (s) => s.council === "Socio-Cultural"
  ).length;

  return (
    <main className="min-h-screen w-full bg-paper pt-28 pb-20 sm:pt-32 sm:pb-24 text-neutral-800">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 space-y-10">

        {/* Top Header Banner */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 shrink-0 rounded-2xl bg-paper-2 border border-ink/15 flex items-center justify-center p-2 text-ink">
              <ShieldCheck size={36} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-sans tracking-tight tracking-tight">
                  Admin Dashboard
                </h1>
                <span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 text-xs font-semibold">
                  Active
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500">
                Logged in as <span className="font-semibold text-neutral-800">sgadmin</span> ({session.user?.email || "sgadmin@iitbbs.ac.in"})
              </p>
            </div>
          </div>

          {/* Logout Action */}
          <form action={logoutAdmin} className="shrink-0">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:border-red-300 hover:bg-red-50 hover:text-red-700 transition-all shadow-sm cursor-pointer"
            >
              <LogOut size={16} />
              <span>Log Out</span>
            </button>
          </form>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Total Societies
              </span>
              <div className="h-10 w-10 rounded-xl bg-paper-2 text-ink flex items-center justify-center">
                <Layers size={18} />
              </div>
            </div>
            <p className="mt-3 text-3xl font-bold text-neutral-900 font-sans tracking-tight">
              {societiesList.length}
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              {technicalCount} Technical &bull; {culturalCount} Socio-Cultural
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Councils
              </span>
              <div className="h-10 w-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                <Building2 size={18} />
              </div>
            </div>
            <p className="mt-3 text-3xl font-bold text-neutral-900 font-sans tracking-tight">
              3
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Tech, Socio-Cultural, Sports
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Office Bearers
              </span>
              <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Users size={18} />
              </div>
            </div>
            <p className="mt-3 text-3xl font-bold text-neutral-900 font-sans tracking-tight">
              2026–2027
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Executive &amp; Advisory Council
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Active Session
              </span>
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck size={18} />
              </div>
            </div>
            <p className="mt-3 text-2xl font-bold text-neutral-900 font-sans tracking-tight">
              Verified
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              NextAuth Session Authenticated
            </p>
          </div>
        </div>

        {/* Administration Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Societies Management Preview */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-neutral-900 font-sans tracking-tight">
                  Registered Societies
                </h2>
                <span className="text-xs font-medium text-neutral-500">
                  {societiesList.length} total
                </span>
              </div>
              <p className="text-sm text-neutral-600 mb-6">
                Overview of student societies currently configured in the database.
              </p>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-2">
                {societiesList.map((soc) => (
                  <div
                    key={soc.slug}
                    className="flex items-center justify-between p-3 rounded-xl border border-neutral-100 bg-paper-2/60 hover:bg-paper-2 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center p-1.5 shrink-0">
                        <img
                          src={soc.logo}
                          alt={soc.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-neutral-900">
                          {soc.name}
                        </h3>
                        <p className="text-[11px] text-neutral-500">
                          {soc.council}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={soc.link}
                      target="_blank"
                      className="text-neutral-400 hover:text-accent transition-colors"
                    >
                      <ExternalLink size={15} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & System Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-lg font-bold text-neutral-900 font-sans tracking-tight mb-4">
                Quick Navigation
              </h2>

              <div className="space-y-3">
                <Link
                  href="/office"
                  className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 hover:border-ink hover:bg-paper-2 transition-all text-neutral-800 group"
                >
                  <div className="flex items-center gap-3">
                    <Users size={18} className="text-ink" />
                    <span className="text-sm font-semibold">Office Bearers Directory</span>
                  </div>
                  <ArrowRight size={16} className="text-neutral-400 group-hover:translate-x-1 group-hover:text-accent transition-all" />
                </Link>

                <Link
                  href="/constitution"
                  className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 hover:border-ink hover:bg-paper-2 transition-all text-neutral-800 group"
                >
                  <div className="flex items-center gap-3">
                    <Building2 size={18} className="text-ink" />
                    <span className="text-sm font-semibold">Gymkhana Constitution</span>
                  </div>
                  <ArrowRight size={16} className="text-neutral-400 group-hover:translate-x-1 group-hover:text-accent transition-all" />
                </Link>

                <Link
                  href="/contact"
                  className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 hover:border-ink hover:bg-paper-2 transition-all text-neutral-800 group"
                >
                  <div className="flex items-center gap-3">
                    <Settings size={18} className="text-ink" />
                    <span className="text-sm font-semibold">Feedback &amp; Inquiries</span>
                  </div>
                  <ArrowRight size={16} className="text-neutral-400 group-hover:translate-x-1 group-hover:text-accent transition-all" />
                </Link>
              </div>
            </div>

            {/* Security Notice */}
            <div className="rounded-2xl border border-ink/15 bg-paper-2 p-6">
              <h3 className="text-sm font-bold text-ink flex items-center gap-2 mb-2">
                <ShieldCheck size={16} className="text-ink" />
                Security Notice
              </h3>
              <p className="text-xs text-ink/70 leading-relaxed">
                This area is restricted to authorized Students&apos; Gymkhana administrators.
                All changes to data, event submissions, and announcements are logged.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}