
"use client";

import { useState, type FormEvent } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/SG.IITBhubaneswar/",
    Icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/iitbhubaneswar",
    Icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/school/iit-bhubaneswar-official",
    Icon: FaLinkedin,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    feedback: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to submit feedback."
        );
      }

      setStatus({
        type: "success",
        message: "Thank you! Your feedback has been submitted successfully.",
      });

      setForm({
        name: "",
        contact: "",
        email: "",
        feedback: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/10";

  return (
    <main className="min-h-screen bg-white text-neutral-800">
      {/* Campus Map */}
      <section className="px-4 pt-24 sm:px-6 md:px-10 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-800">
                Students&apos; Gymkhana
              </p>

              <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                Contact Us
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 sm:text-base">
                Get in touch with the Students&apos; Gymkhana at IIT
                Bhubaneswar for enquiries, suggestions, and feedback.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=IIT+Bhubaneswar+Argul"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-blue-800 transition-colors hover:text-blue-950"
            >
              <MapPin size={16} />
              View campus location
            </a>
          </div>

          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50">
            <iframe
              title="IIT Bhubaneswar campus map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.7637975034427!2d85.67401461474763!3d20.143899486484305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19ac2e52a057f5%3A0x564b6e83a7504a16!2sIIT%20BHUBANESWAR!5e0!3m2!1sen!2sin!4v1603576659450!5m2!1sen!2sin"
              className="h-[260px] w-full border-0 sm:h-[340px] md:h-[390px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Contact Information and Feedback */}
      <section className="px-4 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
              Get in touch
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-neutral-600">
              Have a question or need assistance? You can reach the
              Gymkhana through the contact details below.
            </p>

            <div className="mt-7 divide-y divide-neutral-200 border-y border-neutral-200">
              {/* Address */}
              <div className="flex items-start gap-4 py-5">
                <div className="mt-0.5 shrink-0 text-blue-800">
                  <MapPin size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Campus Address
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Indian Institute of Technology Bhubaneswar
                    <br />
                    At Arugul, Jatani
                    <br />
                    Khordha, Odisha – 752050, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:office.gymkhana@iitbbs.ac.in"
                className="group flex items-start gap-4 py-5"
              >
                <div className="mt-0.5 shrink-0 text-blue-800">
                  <Mail size={21} strokeWidth={1.8} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Email
                  </h3>

                  <p className="mt-2 break-all text-sm text-neutral-600 transition-colors group-hover:text-blue-800">
                    office.gymkhana@iitbbs.ac.in
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:06742114053"
                className="group flex items-start gap-4 py-5"
              >
                <div className="mt-0.5 shrink-0 text-blue-800">
                  <Phone size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    Phone
                  </h3>

                  <p className="mt-2 text-sm text-neutral-600 transition-colors group-hover:text-blue-800">
                    0674 211 4053
                  </p>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-neutral-900">
                Connect with us
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                Follow us for campus updates, activities, and announcements.
              </p>

              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 text-neutral-600 transition-colors hover:border-blue-800 hover:bg-blue-800 hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="h-fit rounded-lg border border-neutral-200 bg-white p-5 sm:p-8">
            <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
              Send feedback
            </h2>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Share your suggestions or concerns with us. Your feedback
              helps improve the campus experience.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Full name <span className="text-red-600">*</span>
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  maxLength={150}
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-number"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Contact number <span className="text-red-600">*</span>
                </label>

                <input
                  id="contact-number"
                  name="contact"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter your contact number"
                  maxLength={15}
                  pattern="[0-9+\-\s()]{7,15}"
                  title="Enter a valid contact number."
                  required
                  value={form.contact}
                  onChange={(e) =>
                    setForm({ ...form, contact: e.target.value })
                  }
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Email address <span className="text-red-600">*</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  maxLength={150}
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-feedback"
                  className="mb-2 block text-sm font-medium text-neutral-700"
                >
                  Your feedback <span className="text-red-600">*</span>
                </label>

                <textarea
                  id="contact-feedback"
                  name="feedback"
                  rows={5}
                  maxLength={5000}
                  placeholder="Write your message here..."
                  required
                  value={form.feedback}
                  onChange={(e) =>
                    setForm({ ...form, feedback: e.target.value })
                  }
                  className={`${inputClass} resize-y`}
                />

                <p className="mt-1 text-right text-xs text-neutral-500">
                  {form.feedback.length}/5000 characters
                </p>
              </div>

              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-2 rounded-md border p-3 text-sm ${
                    status.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                  ) : (
                    <AlertCircle
                      size={18}
                      className="mt-0.5 shrink-0"
                    />
                  )}

                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-800 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Sending..." : "Submit feedback"}
                <Send size={16} />
              </button>

              <p className="text-xs leading-5 text-neutral-500">
                Your information will be used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}