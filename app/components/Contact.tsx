"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { SelectedPage } from "../constants/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const [isEmailValid, setIsEmailValid] = useState<Boolean>(false);
  const [formStatus, setFormStatus] = useState<String>("Submit");

  const inputStyle = `w-full border text-lg bg-primary-300 px-5 py-3 `;

  const handleEmail = (e: any) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    setIsEmailValid(emailPattern.test(e.target.value));
    setEmail(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setFormStatus("Sending...");

    axios
      .post(`https://formsubmit.co/ae39a741079dfadcb8706fd2b5299cd4`, {
        name,
        email,
        message,
      })
      .then((res) => {
        setFormStatus("Successfully! :D");
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setFormStatus("Submit");
        }, 3000);
      })
      .catch((err) => {
        setFormStatus("Something's wrong! Try again :(");
        console.error(err);

        setTimeout(() => {
          setFormStatus("Submit");
        }, 3000);
      });
  };

  return (
    <div
      id="contact"
      className="min-h-[90vh] bg-[#f8f9fa] flex content-center items-center"
    >
      <div className="container py-10">
        {/* HEADER SECTION */}
        <motion.div
          className="mt-4 mb-16"
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >
          <h1 className="text-3xl text-center font-bold mb-8 md:text-4xl">
            Let's Collaborate!
          </h1>
        </motion.div>

        {/* FORM */}
        <div className="w-full md:w-1/2 xl:w-1/3 mx-auto">
          <form target="_blank" onSubmit={onSubmit}>
            <div className="mb-5">
              <input
                type="text"
                className={inputStyle}
                placeholder="Hey, what's your name?"
                name="name"
                value={String(name)}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="text"
                className={inputStyle}
                placeholder="Your email?"
                name="email"
                value={String(email)}
                onChange={handleEmail}
                required
              />
              <p className="text-red-500 indent-3 text-sm">
                {!isEmailValid && email && "Email invalid"}
              </p>
            </div>

            <div className="mb-5">
              <textarea
                className={inputStyle}
                rows={4}
                cols={50}
                placeholder="Type your message here."
                name="message"
                value={String(message)}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={2000}
                required
              />
            </div>

            <button
              type="submit"
              className={`btn w-full ${
                !message.length || !isEmailValid ? "disabled" : ""
              }`}
              disabled={Boolean(!message.length) || formStatus != "Submit"}
            >
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
