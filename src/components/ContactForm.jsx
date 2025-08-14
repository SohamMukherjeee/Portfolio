import React, { useRef } from "react";
import emailjs from "emailjs-com";
import imgCon from "../assets/himosbananas_A_weird_minimal_illustration_in_neon_colors_usin_ce477da2-24fe-4df7-95b4-8951dc6cdb67_2.png";
export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert("Failed to send. Try again.");
      });
  };

  return (
    <div className="h-full sm:h-screen w-full bg-black flex justify-center items-center p-0 sm:p-20 overflow-y-hidden">
      <div className="flex justify-center items-center  bg-[#0f0f0f] rounded-2xl  shadow-md border border-white/10 flex-col sm:flex-row">
        {/* Image Side */}
        <div className=" w-full sm:w-1/2 flex justify-center items-center p-2">
          <img
            src={imgCon}
            alt="Contact"
            className="w-120 h-150  rounded-2xl"
          />
        </div>

        {/* Form Side */}
        <div className="w-full sm:w-1/2 flex justify-center flex-col items-center p-6">
          <h1 className="self-start text-lg mb-3">Contact me</h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-md space-y-4"
          >
            <div>
              <label className="block mb-1 text-[#65696F]">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full p-2 border border-[#65696F] rounded  text-[#65696F]"
              />
            </div>

            <div>
              <label className="block mb-1  text-[#65696F]">Email</label>
              <input
                className="input validator w-full p-2 border  border-[#65696F]  rounded  text-[#65696F] bg-[#0f0f0f]"
                type="email"
                name="email"
                required
                placeholder="mail@site.com"
              />
            </div>

            <div>
              <label className="block mb-1  text-[#65696F]">Subject</label>
              <input
                name="title"
                type="text"
                required
                className="w-full p-2 border  border-[#65696F]  rounded text-[#65696F]"
              />
            </div>

            <div>
              <label className="block mb-1  text-[#65696F]">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full p-2 border  border-[#65696F]  rounded text-[#65696F]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-white/30 text-white px-4 w-full py-2 rounded hover:bg-white/50 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
