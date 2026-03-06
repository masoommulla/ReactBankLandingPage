import React from "react";
import SignUpForm from "./SignUpForm"; // You can rename this to ContactForm if needed

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-primary">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">Contact Us</h2>
      <SignUpForm />
    </section>
  );
};

export default Contact;