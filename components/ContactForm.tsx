"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

const projectTypes = [
  "Film/TV",
  "Commercial",
  "Editorial",
  "Red Carpet/Event",
  "Private Client",
  "Audition/Headshot",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    dates: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClasses =
    "w-full bg-bg-secondary border border-border-subtle px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-accent-gold transition-colors duration-250";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="block text-xs text-text-secondary tracking-wider uppercase mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className={inputClasses}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs text-text-secondary tracking-wider uppercase mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className={inputClasses}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-xs text-text-secondary tracking-wider uppercase mb-2">
          Project Type
        </label>
        <select
          id="projectType"
          required
          className={`${inputClasses} appearance-none cursor-pointer`}
          value={formData.projectType}
          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
        >
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type} className="bg-bg-secondary">
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="dates" className="block text-xs text-text-secondary tracking-wider uppercase mb-2">
          Date(s) Needed
        </label>
        <input
          type="text"
          id="dates"
          className={inputClasses}
          placeholder="e.g., June 15–20, 2025"
          value={formData.dates}
          onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs text-text-secondary tracking-wider uppercase mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className={`${inputClasses} resize-vertical`}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent-gold text-bg-primary font-medium text-sm tracking-wider uppercase py-3.5 hover:bg-accent-gold-hover transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-accent-gold focus-visible:outline-offset-2"
      >
        {submitted ? "Message Sent" : "Send Message"}
      </button>
    </motion.form>
  );
}
