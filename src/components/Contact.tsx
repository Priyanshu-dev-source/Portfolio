"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Build mailto link to send email directly
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:priyanojha14@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 800);
  };

  return (
    <>
      <section id="contact" className="relative font-sans bg-gray-200 pb-0">
        
        {/* The Absolute Wrapper for the overlapping form card */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-0 right-0 z-30 pointer-events-none">
          <div className="h-full max-w-7xl mx-auto px-6 md:px-12 flex justify-end pt-12">
            <div className="w-[450px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-[4px] border-[#ea5b25] p-10 pointer-events-auto h-fit mt-12">
              <h3 className="text-[28px] font-bold text-gray-900 mb-8 tracking-tight">
                Message
              </h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
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
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
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
                  {sent ? "Sent!" : sending ? "opening mail..." : "Send"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Top White Area */}
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-18 pb-18 z-10">
          <div className="lg:w-1/2 pr-0 lg:pr-12">
            <h2 className="text-4xl md:text-[3.5rem] font-bold text-gray-900 mb-10 tracking-tight">
              Get In <span className="text-[#ea5b25]">Touch</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 text-[#888] text-[15px] leading-relaxed font-medium">
              <p className="flex-1">
                aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p className="flex-1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Image Area */}
        <div className="relative w-full overflow-hidden">
          {/* Background Image (Koi Pond from reference) */}
          <div className="absolute inset-0 bg-gray-950">
            <img
              src="https://images.unsplash.com/photo-1544435252-47d0eb4b8751?auto=format&fit=crop&q=80"
              alt="Koi pond background"
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-[2000ms]"
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-14 z-10">
            <div className="lg:w-1/2 flex flex-col gap-10 text-white pr-0 lg:pr-16">
              
              {/* Contact Items matching visual style */}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-white/20 hover:border-[#ea5b25] bg-white/5 backdrop-blur-md transition-all group">
                  <svg className="group-hover:text-[#ea5b25] transition-colors" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-[17px] font-bold tracking-wide">
                  support@lpsum.ge
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-white/20 hover:border-[#ea5b25] bg-white/5 backdrop-blur-md transition-all group">
                  <svg className="group-hover:text-[#ea5b25] transition-colors" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-[17px] font-bold tracking-wide">
                  (+995) 558 49-99-69
                </span>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border-2 border-white/20 hover:border-[#ea5b25] bg-white/5 backdrop-blur-md transition-all group">
                  <svg className="group-hover:text-[#ea5b25] transition-colors" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-[17px] font-bold tracking-wide">
                  Tbilisi,Leselidze St.#124
                </span>
              </div>

              {/* Social Buttons right underneath text block */}
              <div className="flex gap-4 mt-2 ml-14 pl-4 relative z-20">
                <a
                  href="https://www.linkedin.com/in/priyanshu-ojha-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#ea5b25] hover:border-[#ea5b25] border border-white/30 text-white p-3 rounded-xl transition-all shadow-lg backdrop-blur-sm"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://github.com/priyanojha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-[#ea5b25] hover:border-[#ea5b25] border border-white/30 text-white p-3 rounded-xl transition-all shadow-lg backdrop-blur-sm"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Form fallback (visible only on small screens below lg) */}
        <div className="lg:hidden w-full px-6 py-16 bg-white border-t border-gray-100">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-[4px] border-[#ea5b25] p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
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
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
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
                {sent ? "Sent!" : sending ? "opening mail..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ───────────── COPYRIGHT FOOTER ───────────── */}
      <footer className="w-full bg-[#111] font-sans relative z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/5">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#ea5b25] font-semibold">Priyanshu Ojha</span>
            . All rights reserved.
          </p>
          {/* <p className="text-gray-500 text-xs">
            Designed & Built with ❤️ by Priyanshu
          </p> */}
        </div>
      </footer>
    </>
  );
}
