"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, // Replace with your key from https://web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: "Portfolio Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ── Toast Popups ── */}
      <AnimatePresence>
        {sent && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 140 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl bg-green-500 text-white font-semibold text-[15px] shadow-[0_12px_40px_rgba(34,197,94,0.4)]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Message sent successfully!
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 140 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl bg-red-500 text-white font-semibold text-[15px] shadow-[0_12px_40px_rgba(239,68,68,0.4)]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            Failed to send. Please try again.
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="relative font-sans bg-white pb-0">
        {/* The Absolute Wrapper for the overlapping form card */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 z-30 pointer-events-none">
          <div className="h-full max-w-7xl mx-auto px-6 md:px-12 flex justify-end pt-12">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: -10, perspective: 1000 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-[450px] bg-gray-200 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-[4px] border-[#ea5b25] p-10 pointer-events-auto h-fit mt-12"
            >
              <h3 className="text-[28px] font-bold text-gray-900 mb-8 tracking-tight">
                Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-100 bg-[#fbfbfb] focus:bg-white focus:border-[#ea5b25] focus:ring-2 focus:ring-[#ea5b25]/20 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-900 text-[15px]"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email adress"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-100 bg-[#fbfbfb] focus:bg-white focus:border-[#ea5b25] focus:ring-2 focus:ring-[#ea5b25]/20 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-900 text-[15px]"
                  />
                </div>

                {/* Message */}
                <textarea
                  required
                  name="message"
                  placeholder="Type Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-lg border border-gray-100 bg-[#fbfbfb] focus:bg-white focus:border-[#ea5b25] focus:ring-2 focus:ring-[#ea5b25]/20 outline-none transition-all placeholder:text-gray-400 font-medium text-gray-900 text-[15px] resize-none"
                ></textarea>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={sending || sent}
                  className="w-full py-4 mt-2 bg-[#ea5b25] hover:bg-[#d04e1c] text-white font-bold text-[17px] rounded-full transition-all shadow-[0_8px_16px_rgba(234,91,37,0.25)] active:scale-[0.98]"
                >
                  {sent ? "Sent!" : sending ? "Sending" : "Send"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Top White Area */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-18 pb-18 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:w-1/2 pr-0 lg:pr-12"
          >
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-gray-900 mb-10 tracking-tight">
              Get In <span className="text-[#ea5b25]">Touch</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 text-[#888] text-[15px] leading-relaxed font-medium">
              <p className="flex-1">
                Have a project in mind or just want to connect?
                <br />I would love to hear from you let us build something
                amazing together.
              </p>
              <p className="flex-1">
                I am always open to opportunities, collaborations, and
                meaningful conversations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Image Area */}
        <div className="relative w-full overflow-hidden">
          {/* Background Image (Blurred photo) */}
          <div className="absolute inset-0 bg-gray-950">
            <Image
              src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80"
              alt="Blurred background"
              fill
              sizes="100vw"
              loading="lazy"
              className="object-cover opacity-50 blur-sm mix-blend-luminosity hover:mix-blend-normal transition-all duration-[2000ms]"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:w-1/2 flex flex-col gap-10 text-white pr-0 lg:pr-16"
            >
              {/* Contact Items matching visual style */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-white/20 hover:border-[#ea5b25] bg-white/5 backdrop-blur-md transition-all group">
                  <svg
                    className="group-hover:text-[#ea5b25] transition-colors"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-[17px] font-bold tracking-wide">
                  priyanshu2004ss@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-white/20 hover:border-[#ea5b25] bg-white/5 backdrop-blur-md transition-all group">
                  <svg
                    className="group-hover:text-[#ea5b25] transition-colors"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-[17px] font-bold tracking-wide">
                  +91 985180994
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-white/20 hover:border-[#ea5b25] bg-white/5 backdrop-blur-md transition-all group">
                  <svg
                    className="group-hover:text-[#ea5b25] transition-colors"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-[17px] font-bold tracking-wide">
                  Kanpur, Uttar Pradesh
                </span>
              </div>

              {/* Social Buttons right underneath text block */}
              <div className="flex gap-4 mt-2  relative z-20">
                <a
                  href="https://www.linkedin.com/in/priyanshu-kumar-04ba7a300/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 overflow-hidden transition-all hover:border-[#ea5b25] shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-[#ea5b25] transition-all duration-300 group-hover:h-full"></div>
                  <div className="relative z-10 text-white transition-transform duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                </a>

                <a
                  href="https://github.com/Priyanshu-dev-source"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 overflow-hidden transition-all hover:border-[#ea5b25] shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-[#ea5b25] transition-all duration-300 group-hover:h-full"></div>
                  <div className="relative z-10 text-white transition-transform duration-300 ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                </a>

                <a
                  href="https://leetcode.com/u/priyanshu2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 overflow-hidden transition-all hover:border-[#ea5b25] shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-[#ea5b25] transition-all duration-300 group-hover:h-full"></div>
                  <div className="relative z-10 text-white transition-transform duration-300 ">
                    <svg width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/priyanshu_oj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 overflow-hidden transition-all hover:border-[#ea5b25] shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md"
                >
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-[#ea5b25] transition-all duration-300 group-hover:h-full"></div>
                  <div className="relative z-10 text-white transition-transform duration-300 ">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Form fallback (visible only on small screens below lg) */}
        <div className="lg:hidden w-full px-6 py-16 bg-white border-t border-gray-100">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-[4px] border-[#ea5b25] p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-100 bg-[#fbfbfb] focus:bg-white focus:border-[#ea5b25] outline-none transition-all placeholder:text-gray-400 font-medium text-[15px]"
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email adress"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-100 bg-[#fbfbfb] focus:bg-white focus:border-[#ea5b25] outline-none transition-all placeholder:text-gray-400 font-medium text-[15px]"
                />
              </div>

              <textarea
                required
                name="message"
                placeholder="Type Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-lg border border-gray-100 bg-[#fbfbfb] focus:bg-white focus:border-[#ea5b25] outline-none transition-all placeholder:text-gray-400 font-medium text-[15px] resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={sending || sent}
                className="w-full py-4 mt-2 bg-[#ea5b25] text-white font-bold text-[17px] rounded-full transition-all shadow-[0_8px_16px_rgba(234,91,37,0.25)]"
              >
                {sent ? "Sent!" : sending ? "Sending" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ───────────── COPYRIGHT FOOTER ───────────── */}
      <footer className="w-full bg-[#111] font-light  relative z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 border-t border-white/5">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-light">Priyanshu Ojha </span>
            All rights reserved.
          </p>
          {/* <p className="text-gray-500 text-xs">
            Designed & Built with ❤️ by Priyanshu
          </p> */}
        </div>
      </footer>
    </>
  );
}
