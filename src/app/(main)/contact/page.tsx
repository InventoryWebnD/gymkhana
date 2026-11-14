"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PageHero, { Sheet } from "@/components/design/PageHero";
import { Container } from "@/components/design/blocks";
import { MaskLines, Reveal, SectionLabel } from "@/components/design/primitives";

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/SG.IITBhubaneswar/", Icon: FaFacebook },
  { name: "Instagram", href: "https://www.instagram.com/iitbhubaneswar", Icon: FaInstagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/school/iit-bhubaneswar-official", Icon: FaLinkedin },
  { name: "X (Twitter)", href: "https://twitter.com/iitbbs", Icon: FaXTwitter },
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
        throw new Error(result.message || "Unable to submit feedback.");
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
        message: error instanceof Error ? error.message : "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full border-0 border-b border-ink/25 bg-transparent px-0 pb-3 pt-2 text-[16px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-ink";
  const labelClass = "block font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55";

  return (
    <main className="w-full bg-ink">
      <PageHero
        eyebrow="Contact"
        title={["Contact"]}
        italic="Questions, ideas, complaints — we read them all."
        intro="Reach the Students' Gymkhana at IIT Bhubaneswar for enquiries, suggestions and feedback."
        meta={[
          {
            label: "Email",
            value: (
              <a href="mailto:office.gymkhana@iitbbs.ac.in" className="break-all underline-offset-4 hover:underline">
                office.gymkhana@iitbbs.ac.in
              </a>
            ),
          },
          {
            label: "Phone",
            value: (
              <a href="tel:06742114053" className="underline-offset-4 hover:underline">
                0674 211 4053
              </a>
            ),
          },
        ]}
      />

      <Sheet>
        <Container className="grid gap-16 py-24 md:py-32 lg:grid-cols-12 lg:gap-12">
          {/* Contact information */}
          <div className="lg:col-span-5">
            <SectionLabel index="01" className="text-ink/60">
              Get in touch
            </SectionLabel>
            <MaskLines
              as="h2"
              className="mt-7 font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95]"
              lines={["Find us in", <em key="a">Argul.</em>]}
            />

            <dl className="mt-10 border-t border-ink/15">
              <Reveal className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-ink/15 py-5">
                <MapPin size={18} className="mt-0.5 text-accent" aria-hidden="true" />
                <div>
                  <dt className={labelClass}>Campus address</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed">
                    Indian Institute of Technology Bhubaneswar
                    <br />
                    At Arugul, Jatani
                    <br />
                    Khordha, Odisha – 752050, India
                  </dd>
                </div>
              </Reveal>
              <Reveal delay={0.05} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-ink/15 py-5">
                <Mail size={18} className="mt-0.5 text-accent" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className={labelClass}>Email</dt>
                  <dd className="mt-2 text-[15px]">
                    <a href="mailto:office.gymkhana@iitbbs.ac.in" className="break-all underline-offset-4 hover:underline">
                      office.gymkhana@iitbbs.ac.in
                    </a>
                  </dd>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-ink/15 py-5">
                <Phone size={18} className="mt-0.5 text-accent" aria-hidden="true" />
                <div>
                  <dt className={labelClass}>Phone</dt>
                  <dd className="mt-2 text-[15px]">
                    <a href="tel:06742114053" className="underline-offset-4 hover:underline">
                      0674 211 4053
                    </a>
                  </dd>
                </div>
              </Reveal>
            </dl>

            <Reveal delay={0.15} className="mt-8 flex items-center gap-2">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  <Icon size={16} />
                </a>
              ))}
            </Reveal>

            <Reveal delay={0.2} className="group mt-10 overflow-hidden rounded-2xl bg-paper-2">
              <iframe
                title="IIT Bhubaneswar campus map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.7637975034427!2d85.67401461474763!3d20.143899486484305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19ac2e52a057f5%3A0x564b6e83a7504a16!2sIIT%20BHUBANESWAR!5e0!3m2!1sen!2sin!4v1603576659450!5m2!1sen!2sin"
                className="h-[280px] w-full border-0 grayscale transition-[filter] duration-700 group-hover:grayscale-0 md:h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </Reveal>
            <a
              href="https://www.google.com/maps/search/?api=1&query=IIT+Bhubaneswar+Argul"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium underline-offset-4 hover:underline"
            >
              Open in Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Feedback form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal className="rounded-[28px] bg-paper-2 p-6 sm:p-10">
              <SectionLabel index="02" className="text-ink/60">
                Send feedback
              </SectionLabel>
              <p className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
                Share a suggestion or a concern — <em>it helps make campus better.</em>
              </p>

              <form onSubmit={handleSubmit} className="mt-10 space-y-8">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Full name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    maxLength={150}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-number" className={labelClass}>
                      Contact number <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-number"
                      name="contact"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Your number"
                      maxLength={15}
                      pattern="[0-9+\-\s()]{7,15}"
                      title="Enter a valid contact number."
                      required
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Email address <span className="text-accent">*</span>
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
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-feedback" className={labelClass}>
                    Your feedback <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-feedback"
                    name="feedback"
                    rows={5}
                    maxLength={5000}
                    placeholder="Write your message here…"
                    required
                    value={form.feedback}
                    onChange={(e) => setForm({ ...form, feedback: e.target.value })}
                    className={`${inputClass} resize-y`}
                  />
                  <p className="mt-2 text-right font-mono text-[10px] tracking-[0.18em] text-ink/45">
                    {form.feedback.length}/5000
                  </p>
                </div>

                {status && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`flex items-start gap-2 rounded-xl p-4 text-[14px] ${
                      status.type === "success" ? "bg-[#e3efe3] text-[#1f4d2b]" : "bg-[#f7e1dc] text-[#7a2614]"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    ) : (
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </div>
                )}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-ink pl-6 pr-2 text-[15px] font-medium text-paper transition-colors hover:bg-accent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "Sending…" : "Submit feedback"}
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-500 group-hover:rotate-45">
                      <Send size={15} />
                    </span>
                  </button>
                  <p className="text-[12px] leading-5 text-ink/55 sm:max-w-[16rem] sm:text-right">
                    Your information will be used to respond to your enquiry.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </Sheet>
    </main>
  );
}
