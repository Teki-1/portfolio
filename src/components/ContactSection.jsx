import { useRef } from "react";
import { Linkedin, Mail, Phone, Send } from "lucide-react";
import { cn } from "../libs/utils";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

export const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0fh48p9", // replace with your EmailJS service ID
        "template_qqrmxo2", // replace with your EmailJS template ID
        form.current,
        "nImExFu36X3vKyS27" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <Toaster position="top-right" />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get in <span className="text-primary">Contact</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          I'm currently open to new opportunities. Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:nournabarawi20@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    nournabarawi20@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+20 1017583047"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +20 1017583047
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">Giza, Egypt</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/nour-mohamed-572213218/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block txt-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  className="w-full px-4 py-3 rounded-md border input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Nour Mohamed"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block txt-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  className="w-full px-4 py-3 rounded-md border input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="nourmohamed20@gmail.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block txt-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full px-4 py-3 rounded-md border input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Greetings, I would like to talk about ..."
                  required
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "space-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
