"use client";
import {
  Mail,
  MapPin,
  SendIcon,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "muhammadibtisam777@gmail.com",
    href: "mailto:muhammadibtisam777@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hafizabad, Punjab, Pk",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) throw new Error("EmailJs config missing");

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setSubmitStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      setSubmitStatus({ type: "error", message: error.text || "Failed to send message." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 px-4 sm:px-6 md:px-8">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/2 transform translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="text-secondary-foreground text-xs sm:text-sm font-medium tracking-wider uppercase animate-fade-in">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 animate-fade-in animation-delay-100 text-secondary-foreground leading-tight">
          Let's build{" "}
          <span className="font-serif italic font-normal text-white">something great.</span>
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground animate-fade-in animation-delay-200 px-2">
          Have a project in mind? Or a job opportunity? I'd love to hear about it. Send me a
          message and let's discuss.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {/* Form */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-primary/30 animate-fade-in delay-400">
          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name..."
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm bg-surface rounded-lg sm:rounded-xl border border-border focus:border-primary focus:ring-1 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm bg-surface rounded-lg sm:rounded-xl border border-border focus:border-primary focus:ring-1 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your message..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm bg-surface rounded-lg sm:rounded-xl border border-border focus:border-primary focus:ring-1 outline-none transition-all resize-none"
              />
            </div>

            <Button size="lg" className="w-full" type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : <><span>Send</span><SendIcon className="w-5 h-5 ml-2 inline" /></>}
            </Button>

            {submitStatus.type && (
              <div
                className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl text-xs sm:text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                )}
                <p className="break-words">{submitStatus.message}</p>
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-6 animate-fade-in animation-delay-400 overflow-hidden">
          <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-surface">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-surface transition-colors group break-words"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium text-sm sm:text-base truncate">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/30">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium text-sm sm:text-base">Currently Available</span>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed break-words">
              I'm currently open to new opportunities and exciting projects. Whether you need a
              full-time engineer or a freelance consultant, let's talk!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
