"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  async function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (!email) {
      alert("Please enter your email");
      return;
    }

    if (!message) {
      alert("Please enter your message");
      return;
    }

    alert("Thank you for contacting us. We will get back to you soon.");

    try {
      await fetch("https://api.sassywares.com/contact", {
        body: JSON.stringify({ name, email, message }),
        method: "POST",
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container position-relative">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
          <h2 className="section-caption-fancy mb-20 mb-xs-10">Contact Us</h2>
          <h3 className="section-title mb-50 mb-sm-30">
            We're open when you need us.
          </h3>
          {/* Decorative Image */}
          <div className="d-none d-xl-block">
            <div className="wow fadeInUp">
              <Image
                src="/assets/images/demo-fancy/contact-section-image.png"
                alt=""
                style={{ width: "100%", height: 320 }}
                width={225}
                height={250}
              />
            </div>
          </div>
          {/* End Decorative Image */}
        </div>
        {/* End Left Column */}
        {/* Right Column */}
        <div className="col-lg-8 col-xl-7 offset-xl-1">
          <div className="position-relative">
            <div className="box-shadow round p-4 p-sm-5">
              <h4 className="h3 mb-30">Get in Touch</h4>
              {/* Contact Form */}
              <form
                id="contact_form"
                onSubmit={onFormSubmit}
                className="form contact-form"
              >
                <div className="row">
                  <div className="col-md-6">
                    {/* Name */}
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="input-lg round form-control"
                        placeholder="Enter your name"
                        pattern=".{3,100}"
                        required
                        aria-required="true"
                      />
                    </div>
                    {/* End Name */}
                  </div>
                  <div className="col-md-6">
                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="input-lg round form-control"
                        placeholder="Enter your email"
                        pattern=".{5,100}"
                        required
                        aria-required="true"
                      />
                    </div>
                    {/* End Email */}
                  </div>
                </div>
                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    className="input-lg round form-control"
                    style={{ height: 130 }}
                    placeholder="Enter your message"
                    defaultValue={""}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 col-xl-5">
                    {/* Send Button */}
                    <div className="pt-3">
                      <button
                        className="submit_btn btn btn-mod btn-color btn-large btn-round btn-hover-anim"
                        id="submit_btn"
                        aria-controls="result"
                      >
                        <span>Send Message</span>
                      </button>
                    </div>
                    {/* End Send Button */}
                  </div>
                  <div className="col-md-6 col-xl-7 d-flex align-items-center">
                    {/* Inform Tip */}
                    <div className="form-tip w-100 pt-3 mt-sm-20">
                      <i className="icon-info size-16" />
                      All the fields are required. By sending the form you agree
                      to the{" "}
                      <Link href="/terms-and-conditions">
                        Terms &amp; Conditions
                      </Link>{" "}
                      and <Link href="/privacy-policy">Privacy Policy</Link>.
                    </div>
                    {/* End Inform Tip */}
                  </div>
                </div>
                <div
                  id="result"
                  role="region"
                  aria-live="polite"
                  aria-atomic="true"
                />
              </form>
              {/* End Contact Form */}
            </div>
          </div>
        </div>
        {/* End Right Column */}
      </div>
    </div>
  );
}
