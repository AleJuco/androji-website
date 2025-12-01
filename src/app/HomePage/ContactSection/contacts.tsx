"use client";
import { useState } from "react";
import { Text } from "@/components/Text/Text";
import ScrollFadeIn from "@/components/TextEffects/ScrollFadeIn"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
      <div className="flex flex-col w-full h-full bg-bg1 text-dgrey p-30 items-center justify-center">
        <div className="flex justify-center items-center py-4">
            <ScrollFadeIn>
                <Text variant="title">Contact</Text>
            </ScrollFadeIn>
        </div>
        
        <ScrollFadeIn>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-2 border rounded-lg"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-2 border rounded-lg"
                    required
                />
                <input
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="px-4 py-2 border rounded-lg"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-2 border rounded-lg h-32 resize-none"
                    required
                />
                <button type="submit" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Send Message
                </button>
                {status && <p className="text-center">{status}</p>}
            </form>
        </ScrollFadeIn>
      </div>
    );
}