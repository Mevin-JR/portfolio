"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Required field(s) are empty...", {
        duration: 5000,
        style: {
          background: "rgba(255, 255, 255, 0.1)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        },
      });
      return;
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ fullName: "", email: "", message: "" });

        toast.success(
          "Thank you for contacting, will get back to you asap :)",
          {
            duration: 5000,
            style: {
              background: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            },
          }
        );
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error(
        "Sorry!! could not submit contact form, please use email instead.",
        {
          duration: 5000,
          style: {
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          },
        }
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full w-full lg:w-[500px] xl:w-full flex flex-col gap-8
                bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-4 md:p-10 lg:p-5 xl:p-10 rounded-lg"
    >
      <label className="flex flex-col gap-2">
        Full Name
        <input
          type="text"
          name="fullName"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
          className="text-cyan-400 outline-none bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-3 rounded-lg"
        />
      </label>
      <label className="flex flex-col gap-2">
        Email
        <input
          type="text"
          name="email"
          placeholder="johndoe@gmail.com"
          value={formData.email}
          onChange={handleChange}
          className="text-cyan-400 outline-none bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-3 rounded-lg"
        />
      </label>
      <label className="flex flex-col gap-2">
        Message
        <textarea
          name="message"
          placeholder="Hi! How are you..?"
          value={formData.message}
          onChange={handleChange}
          className="h-40 resize-none outline-none scrollbar-hide text-cyan-400
                bg-white/5 backdrop-blur-sm border border-white/20 shadow-md p-3 rounded-lg"
        />
      </label>
      <button
        type="submit"
        className="self-end px-4 py-2 border 
                border-cyan-400/50 bg-cyan-400/20 text-cyan-400 rounded
                hover:text-black hover:bg-cyan-400 transition-all duration-200"
      >
        Send
      </button>
    </form>
  );
}
